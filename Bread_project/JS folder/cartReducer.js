import { ADD_TO_CART, DECREMENT, INCREMENT, REMOVE_FROM_CART } from "../types";

export const cartReducer = ( state = {cartItems: JSON.parse(localStorage.getItem("cartItems")  || "[]" ) } , action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { 
                cartItems: action.payload.cartItems};
        case REMOVE_FROM_CART:
            return {
                 cartItems: action.payload.cartItems};
        case INCREMENT: 
            return {
                cartItems: action.payload.cartItems};
        case DECREMENT:
            return {
                cartItems: action.payload.cartItems};
        default:
            return state;
    }
}
