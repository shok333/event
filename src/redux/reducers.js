import {
    GET_EVENT_LIST_SUCCESS,
    SET_LOCAL_EVENT_RATING,
    ADD_REVIEW_SUCCESS,
    TEXTAREA_EDITION_SUCCESS,
    REQUEST_ALLOWED,
    REQUEST_FORBIDDEN,
    ADD_CREATE_EVENT,
    REMOVE_CREATE_EVENT
} from './actions';

function getInitialState() {
    return {
        createEvents: [],
        requestAllow: true,
        count: 0,
        next: null,
        previous: null,
        results: []
    }
}

export default function reducer(state = getInitialState(), action){
    switch (action.type) {
        case GET_EVENT_LIST_SUCCESS:
            return {
                createEvents: state.createEvents,
                requestAllow: state.requestAllow,
                count: state.count+action.data.count,
                next: action.data.next,
                previous: action.data.previous,
                results: state.results.concat(
                    action.data.results.map(item => {
                        if(!item.review){
                            return {
                                id: item.id,
                                title: item.title,
                                photo: item.photo,
                                review: {
                                    id: null,
                                    text: '',
                                    rating: 0,
                                }
                            }
                        }
                        return item;
                    })
                ),
            }

        case SET_LOCAL_EVENT_RATING:
            const { eventId, rating } = action.data;
            const results = state.results.map((item) => {
                if(item.id === eventId){
                    return {
                        id: item.id,
                        title: item.title,
                        photo: item.photo,
                        review: {
                            id: item.review.id,
                            text: item.review.text,
                            rating: rating,
                        }
                    }
                }
                return item;
            });
            return {
                createEvents: state.createEvents,
                requestAllow: state.requestAllow,
                count: state.count,
                next: state.next,
                previous: state.previous,
                results: results
            }

        case ADD_REVIEW_SUCCESS:
            const newState = state.results.map((item) => {
                if(item.id === action.data.eventId){
                    return {
                        id: item.id,
                        title: item.title,
                        photo: item.photo,
                        review: {
                            id: action.data.review.id,
                            text: action.data.review.text,
                            rating: action.data.review.rating,
                        }
                    }
                }
                return item;
            });
            return {
                createEvents: state.createEvents,
                requestAllow: state.requestAllow,
                count: state.count,
                next: state.next,
                previous: state.previous,
                results: newState
            }

        case TEXTAREA_EDITION_SUCCESS:
            const successTextareaEditionState = state.results.map((item) => {
                if(item.id === action.data.eventId){
                    return {
                        id: item.id,
                        title: item.title,
                        photo: item.photo,
                        review: {
                            id: item.review.id,
                            text: action.data.review.text,
                            rating: item.review.rating,
                        }
                    }
                }
                return item;
            });
            return {
                createEvents: state.createEvents,
                requestAllow: state.requestAllow,
                count: state.count,
                next: state.next,
                previous: state.previous,
                results: successTextareaEditionState
            }
        case REQUEST_FORBIDDEN:
            return {
                createEvents: state.createEvents,
                requestAllow: false,
                count: state.count,
                next: state.next,
                previous: state.previous,
                results: state.results
            }
        case REQUEST_ALLOWED:
            return {
                createEvents: state.createEvents,
                requestAllow: true,
                count: state.count,
                next: state.next,
                previous: state.previous,
                results: state.results
            }
        case ADD_CREATE_EVENT:
            return (() => {
                let createEvents = [];
                if(state.createEvents.length === 0){
                    createEvents.push(action.data);
                }
                else {
                    let addElementToArray = true;
                    createEvents = state.createEvents.map((item) => {
                        if(action.data.eventId === item.eventId){
                            addElementToArray=false;
                            return {
                                eventId: item.eventId,
                                text: action.data.text
                            }
                        }
                        return item;
                    });
                    if(addElementToArray){
                        createEvents.push(action.data)
                    }
                }

                return {
                    createEvents: createEvents,
                    requestAllow: state.requestAllow,
                    count: state.count,
                    next: state.next,
                    previous: state.previous,
                    results: state.results
                }
            })();
        case REMOVE_CREATE_EVENT:
            return (() => {
                const createEvents = state.createEvents.filter((item) => {
                    if(action.data === item.eventId){
                        return null;
                    }
                    return item;
                });
                return {
                    createEvents: createEvents,
                    requestAllow: state.requestAllow,
                    count: state.count,
                    next: state.next,
                    previous: state.previous,
                    results: state.results
                }
            })()
        default:
            return state;
    }
}
