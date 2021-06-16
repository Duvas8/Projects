import { FETCH_SHOPITEMS } from "../types"
import { FILTER_SHOPITEMS_BY_FLOUR_TYPE} from  "../types"

export const fetchShopItems = () => async (dispatch) => {
    const res = await fetch("/api/shopitems");
    const data = await res.json();
    console.log(data);
    dispatch({
        type: FETCH_SHOPITEMS,
        payload: data
    });
}

export const filterShopItems = (shopItems , type) => (dispatch) => {
    dispatch({
        type: FILTER_SHOPITEMS_BY_FLOUR_TYPE,
        payload: {
            type: type,
                items: 
                type === "" 
                ? shopItems
                : shopItems.filter((x) => x.flourType.indsexOf(type) >= 0),
        },
    });
};


