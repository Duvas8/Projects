import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

// im am try to see if ican use product insted of ShopItem because it is much eseyer
export const addToCart = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice(); // make a copy of the items in the cart
    let alredyInCart = false;
    cartItems.forEach((x) => {
        if(x._id === product._id){
            alredyInCart = true;
            x.count++;
        }
    })
    if(!alredyInCart){
        cartItems.push({...product, count: 1})
    }
    dispatch({
        type: ADD_TO_CART,
        payload: { cartItems },
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
};

export const removeFromCart  = (product) => (dispatch ,getState ) => {
    const cartItems = getState().cart.cartItems.slice()
    .filter(
        x => x._id !== product._id
    );
    dispatch({
        type: REMOVE_FROM_CART, 
        payload: { cartItems },
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
};



/*this.setState({cartItems})
    console.log(cartItems);
    ;
    addAmount = (shopItem) => {
            const cartItems = state.cartItems;
            cartItems.forEach((x) => {
                if(x._id === shopItem._id){
                    x.count++
                }  
            })
            setState({cartItems})
        };

        subAmount = (shopItem, index) => {
            const cartItems = [...state.cartItems];
            cartItems.forEach((x) => {
                if(x._id === shopItem._id){
                    if(x.count === 1){
                  removeFromCart(index)
            }else{
                x.count-- 
            }
                   
                } 
                
            }) 
        } need to implement  this in the this in  the redux store
    */