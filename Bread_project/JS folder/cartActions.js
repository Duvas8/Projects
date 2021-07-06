// im am try to see if ican use product insted of ShopItem because it is much eseyer// make a copy of the items in the cart
import { ADD_TO_CART, REMOVE_FROM_CART , INCREMENT , DECREMENT} from "../types";

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((x) => {
    if (x._id === product._id) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  console.log(cartItems)
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice()
    .filter((x) => x._id !== product._id);
  dispatch({
        type: REMOVE_FROM_CART,
        payload: { cartItems } 
    });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};


export const addAmount = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    cartItems.forEach((x) => {
        if(x._id === product._id){
            x.count++
        }  
    });
    dispatch({
        type: INCREMENT,
        payload: { cartItems },
      });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log(cartItems)
};

export const subAmount = (product, removeFromCart) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    cartItems.forEach((x) => {
        if(x._id === product._id){
            x.count--  
        };
    });
    dispatch({
        type: DECREMENT,
        payload: { cartItems },
      });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log(cartItems)
}

/*this.setState({cartItems})
    console.log(cartItems);
    ;

 if(x.count === 1){
                getState().cart.cartItems.slice().filter((y) => y._id !== product._id);
        }else{
        
        }

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
        } need to implement  this in the this in  the redux store */
   
