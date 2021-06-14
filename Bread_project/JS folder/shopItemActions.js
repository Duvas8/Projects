import { FETCH_SHOPITEMS } from "../types"

export const fetchShopItems = () => async (dispatch) => {
    const res = await fetch("/api/shopitems");
    const data = await res.json();
    console.log(data);
    dispatch({
        type: FETCH_SHOPITEMS,
        payload: data
    });
}
