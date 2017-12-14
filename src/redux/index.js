import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/reducers';
import sagas from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware,
        ),
    ),
);


export default store;

sagaMiddleware.run(sagas);
