import { takeEvery, call, put } from 'redux-saga/effects';
import {
    GET_EVENT_LIST,
    SET_EVENT_RATING,
    ADD_REVIEW,
    TEXTAREA_EDITION,
    getEventListSuccessAction,
    setLocalEventRatingAction,
    addReviewSuccessAction,
    textareaEditionSuccessAction,
    requestForbiddenAction,
    requestAllowedAction
} from './actions';
import { ajaxRequest } from '../requestApi';

function* getEvents(action) {
    yield put(requestForbiddenAction());
    let pathEnd = '';
    if(action.data){
        pathEnd=`?previous=${action.data.previous}&next=${action.data.next}`;
    }
    const response = yield call(ajaxRequest, 'event'+pathEnd, 'GET');
    if (response.count > 0) {
        yield put(getEventListSuccessAction(response));
    }
    yield put(requestAllowedAction());
}

function* setRating(action) {
    yield call(ajaxRequest, 'reviews/'+action.data.eventId, 'PATCH', action.data);
    yield put(setLocalEventRatingAction(action.data));
}


function* addReview(action) {
    const response = yield call(ajaxRequest, 'reviews', 'POST', action.data);
    yield put(addReviewSuccessAction(response));
}

function* editTextarea(action) {
    const response = yield call(ajaxRequest, 'reviews/' + action.data.eventId, 'PATCH', action.data);
    yield put(textareaEditionSuccessAction(response));
}
export default function* root() {
    yield takeEvery(GET_EVENT_LIST, getEvents);

    yield takeEvery(ADD_REVIEW, addReview);

    yield takeEvery(SET_EVENT_RATING, setRating);

    yield takeEvery(TEXTAREA_EDITION, editTextarea);
}
