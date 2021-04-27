import { createStore, applyMiddleware,  combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { shopItemsReducer } from './reducers/shopItemReducers';

const initialState = {}
// create the redux store
const reduxStore = createStore(
    combineReducers({
        shopItems: shopItemsReducer,
    }),
    initialState, 
    )