import { FETCH_SHOPITEMS } from "../types"
import { FILTER_SHOPITEMS_BY_FLOUR_TYPE} from  "../types"
import { ORDER_SHOPITEMS_BY_PRICE } from "../types"

export const fetchShopItems = () => async (dispatch) => {
    const res = await fetch("/api/shopitems");
    const data = await res.json();
    console.log(data);
    dispatch({
        type: FETCH_SHOPITEMS,
        payload: data
    });
}

export const filterShopItems = (shopItems , typeOfFlour) => (dispatch) => {
    dispatch({
        type: FILTER_SHOPITEMS_BY_FLOUR_TYPE,
        payload: {
            typeOfFlour: typeOfFlour,
                items: 
                typeOfFlour === "" 
                ? shopItems
                : shopItems.filter((x) => x.flourType.indsexOf(typeOfFlour) >= 0),
        },
    });
};

export const sortShopItems = (filterdItems, sort) => (dispatch) => {
    const sortedItems =  filterdItems.slice()
    if( sort === ""){
        sortedItems.sort((a, b)  => (a._id > b._id ? 1 : -1));
    } else { 
        sortedItems.sort((a ,b) => (
            sort === "Lowest"
            ? a.price > b.price 
                ? 1 
                : -1
            : a.price > b.price
                ? -1
                : 1
            ))
    }
    dispatch({
        type: ORDER_SHOPITEMS_BY_PRICE, 
        payload: {
            sort: sort,
            items: sortedItems,
        }, 
    })
}  
