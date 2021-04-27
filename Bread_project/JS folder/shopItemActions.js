import { FETCH_SHOPITEMS } from "../types"


export const fetchShopItems = ()  => async(dispatch) => {
    const res = await fetch("/api//api/ShopItems");
    dispatch({
        type: FETCH_SHOPITEMS,
        payload: res.data,
    });
}
