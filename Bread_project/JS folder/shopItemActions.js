import { FETCH_SHOPITEMS } from "../types"


export const fetchShopItems = ()  => async (dispatch) => {
    const res = await fetch("/api/ShopItems");
    const data = res.json();
    console.log(data);
    dispatch({
        type: FETCH_SHOPITEMS,
        payload: data,
    });
}
