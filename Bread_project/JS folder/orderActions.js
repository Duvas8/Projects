import { CREATE_ORDER, CLEAR_ORDER ,CLEAR_CART, FETCH_ORDER, DELETE_ORDER, FETCH_COLUMNS} from "../types";

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

export const fetchColumns = (setColumns) => (dispatch) => {
  fetch("/api/columns")
  .then((res) => res.json())
  .then((data) => { setColumns(data);
    dispatch({ type: FETCH_COLUMNS, payload: data })
    
  });
}



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
  
