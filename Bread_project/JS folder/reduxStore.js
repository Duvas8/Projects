import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { shopItemsReducer } from './reducers/shopItemReducers';

const initialState = {}
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// create the redux store
const store = createStore(
    combineReducers({
        ShopItems: shopItemsReducer,
    }), 
    initialState, 
    composeEnhancers(applyMiddleware(thunk))
    );

    export default store;