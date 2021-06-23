import { FETCH_SHOPITEMS, FILTER_SHOPITEMS_BY_FLOUR_TYPE, ORDER_SHOPITEMS_BY_PRICE} from "../types"




// reduce function  that takes 2 parmeters state that equl to empty object and an action 
export const shopItemsReducer = (state = {}, action) => {
  //takes the type parmeter from the action
  switch (action.type) {
    case FILTER_SHOPITEMS_BY_FLOUR_TYPE:
      return{
        ...state,
        typeOfFlour: action.payload.typeOfFlour,
        filteredItems: action.payload.items,
      };
    case ORDER_SHOPITEMS_BY_PRICE:
      return{
        // note not to forget to use spred opertor one things that chainge
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };
    // if the action.type equl to FETCH_SHOPITEMS the switch uses the none default case 
   case FETCH_SHOPITEMS:
        return {items: action.payload, filteredItems: action.payload} ;  
    default:
        return state;
 }
};

 
