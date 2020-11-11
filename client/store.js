import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';


//Define a defaultState Object or fetch data in for each collection you plan to have in your store
const defaultState= {
    posts,
    comments
};

const store= createStore(rootReducer, defaultState);

export const history= syncHistoryWithStore(browserHistory, store);

if (module.hot){
    module.hot.accept('./reducers/', () => {
        const nextRootReducer= require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;