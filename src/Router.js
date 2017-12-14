import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import EventListContainer from './containers/EventListContainer';

export default (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={EventListContainer} />
        </div>
    </BrowserRouter>
);
