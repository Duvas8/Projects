import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { shopItemsReducer } from './reducers/shopItemReducers';

const initialState = {}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create the redux store
const store = createStore(
    combineReducers({
        ShopItems: shopItemsReducer,
        cart:  cartReducer
    }), 
    initialState, 
    composeEnhancers(applyMiddleware(thunk))
    );

    export default store;
