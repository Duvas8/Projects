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

export const filterShopItems = (ShopItems , typeOfFlour) => (dispatch) => {
    dispatch({
        type: FILTER_SHOPITEMS_BY_FLOUR_TYPE,
        payload: {
            typeOfFlour: typeOfFlour,
                items: 
                typeOfFlour === "" 
                    ? ShopItems
                // צריך לנסות ליצור פעולה שתאפס שתשלח לא נמצא מוצר 
                    : ShopItems.filter((x) => x.flourType.indexOf(typeOfFlour) >= 0),
        },
    });
};

export const sortShopItems = (filteredItems, sort) => (dispatch) => {
    const sortedItems =  filteredItems.slice()
    if( sort === "latest"){
        sortedItems.sort((a, b)  => (a._id > b._id ? 1 : -1));
    } else { 
        sortedItems.sort((a ,b) => (
            sort === "lowest"
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
