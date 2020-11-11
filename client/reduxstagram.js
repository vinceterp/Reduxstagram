import React from 'react';
import css from './styles/style.styl';
import {render} from 'react-dom';

//import components needed on Homepage
import Single from './components/Single';
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import { Router, Route, IndexRoute} from 'react-router';

import {Provider} from 'react-redux';
import store, {history} from './store';

const router = (
    <Provider store = {store}>
        <Router history={history}>
            <Route path="/" component= {App}>
                <IndexRoute component= {PhotoGrid}></IndexRoute>
                <Route path= "/view/:postId" component= {Single}></Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));