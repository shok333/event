export const GET_EVENT_LIST = 'GET_EVENT_LIST';
export const GET_EVENT_LIST_SUCCESS = 'GET_EVENT_LIST_SUCCESS';

export const SET_EVENT_RATING = 'SET_EVENT_RATING';

export const SET_LOCAL_EVENT_RATING = 'SET_LOCAL_EVENT_RATING';

export const ADD_REVIEW = 'ADD_REVIEW';
export const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS';

export const TEXTAREA_EDITION = 'TEXTAREA_EDITION';
export const TEXTAREA_EDITION_SUCCESS = 'TEXTAREA_EDITION_SUCCESS';

export const REQUEST_ALLOWED = 'REQUEST_ALLOWED';
export const REQUEST_FORBIDDEN = 'REQUEST_FORBIDDEN';

export const ADD_CREATE_EVENT = 'ADD_CREATE_EVENT';
export const REMOVE_CREATE_EVENT = 'REMOVE_CREATE_EVENT';

export const getEventListAction = (props) => ({ type: GET_EVENT_LIST, data: props});
export const getEventListSuccessAction = eventList => ({ type: GET_EVENT_LIST_SUCCESS, data: eventList });

export const setEventRatingAction = (ratingArray) => ({ type: SET_EVENT_RATING, data: ratingArray });

export const setLocalEventRatingAction = (ratingArray) => ({ type: SET_LOCAL_EVENT_RATING, data: ratingArray });

export const addReviewAction = (review) => ({ type: ADD_REVIEW, data: review});
export const addReviewSuccessAction = (review) => ({ type: ADD_REVIEW_SUCCESS, data: review});

export const textareaEditionAction = (value) => ({ type: TEXTAREA_EDITION, data: value});
export const textareaEditionSuccessAction = (value) => ({ type: TEXTAREA_EDITION_SUCCESS, data: value});


export const requestAllowedAction = (value) => ({ type: REQUEST_ALLOWED});
export const requestForbiddenAction = (value) => ({ type: REQUEST_FORBIDDEN });

export const addCreateEventAction = (value) => ({ type: ADD_CREATE_EVENT, data: value });
export const removeCreateEventAction = (value) => ({ type: REMOVE_CREATE_EVENT, data: value });