import { FETCH_SHOPITEMS } from "../types";

// reduce function  that takes 2 parmeters state that equl to empty object and an action 
export const shopItemsReducer = (state = {}, action) => {
    //takes the type parmeter from the action
    switch (action.type) {
        // if the action.type equl to FETCH_SHOPITEMS the switch uses the none default case 
        case FETCH_SHOPITEMS:
           return {items: action.payload} ;
        default:
            return state;
    }
};