import { CREATE_ORDER, CLEAR_ORDER ,CLEAR_CART, FETCH_ORDER, DELETE_ORDER} from "../types";

export const createOrder = (order) => (dispatch) => {
    fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: CREATE_ORDER, payload: data });
        localStorage.clear("cartItems");
        dispatch({ type: CLEAR_CART });
      });
  };


export const clearOrder = () => (dispatch) => {
    dispatch({
        type: CLEAR_ORDER,
    })
}

export const fetchOrder = (setOrders) => (dispatch) => {
  fetch("/api/orders")
    .then((res) => res.json())
    .then((data) => { setOrders(data)
      dispatch({ type: FETCH_ORDER, payload: data });
    });
}



export const rdeleteOrder = (id) => (dispatch) => {
    
 fetch(`/api/orders/${id}`,
  {
    method: "DELETE",
}
  ).then((res) => res.json()
   .then((data) => { 
    dispatch({ type: DELETE_ORDER, payload: data});
  })
)}

export const deleteOrder = (id) => (dispatch) =>  {
    fetch(`/api/orders/${id}`, {
      method: "DELETE",
    })
    .then(response => response)
    .then(id => dispatch(
      {
        type: DELETE_ORDER,
        payload: deleteOrder(id)
       }
      ))  
    }
  




  
   
/*

export const createOrder = (order) =>  (dispatch) => {
    const newOrder = JSON.stringify(order); 
    const postOrder =  fetch("/api/order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            
        },
        body: newOrder,
    })
    dispatch({
        type: CREATE_ORDER,
        payload: postOrder,
    });
    localStorage.clear("cartItems");
    dispatch({
        type:CLEAR_CART ,
    });
};*/ 
