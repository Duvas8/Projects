import React, { Component } from 'react'
import  './Checkout.css';
import { connect } from 'react-redux';
import formatCurrency from '../../../util'
import { Fade , Zoom} from "react-awesome-reveal";
import { createOrder, clearOrder} from "../../../actions/orderActions"
import Modal from 'react-modal';




class Checkout extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            phoneNumber:"",
            peckupPoint:"",
         }
        };


        handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
       };

// need to add err hendel for phone number 
        createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
            peckupPoint: this.state.peckupPoint,
            cartItems: JSON.parse(localStorage.getItem("cartItems")  || "[]" ),
            total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0 ),
        };
        
        console.log(order);
        if(isNaN(order.phoneNumber)){
            alert("Phone Number need to be a number")
            return 
        }else {
               this.props.createOrder(order)
        }
        
    }


    
    closeModal = () => {
        this.props.clearOrder();
        this.props.showCheckout();
    };

    openSucssesOrder = async (order , res) => {
       if (order)
        return res ;
   }

    render() {

        const {cartItems , order} = this.props;
        return (   
             <div>
            
               { !order && ( 
               <div className="checkout_background">
            <Fade  cascade duration="750">     
            <div className="checkout_container">
            <Fade  direction="up" cascade duration="750">
                <div className="checkout_items_container">
                    <div className="checkout_items_info">
                        <div>Name</div>
                        <div>Amount</div>
                    </div>
                <ul className="checkout_items">
                            {cartItems.map(item => (
                                <li key={cartItems.id}>
                                    <div className = "checkout_name">
                                            {item.name}
                                            </div>
                                        <div className = "ItemCounte"> 
                                        {item.count}
                                    </div>
                                </li>
                            ))}

                        </ul>

                    <div className="checkout_total">
                        <div >
                            TOTAL{"   "}
                            {formatCurrency(
                                cartItems.reduce((a, c) => a + c.price * c.count, 0)
                            )}
                        </div>
                    </div>
                </div>
        
                <form onSubmit={this.createOrder}>
                    <ul className="form_container">
                        <li key="inputName">
                            <label>Name</label>
                            <br></br>
                                <input
                                name="name"
                                type="text"
                                required
                                onChange = {this.handleInput}
                                ></input>
                        </li>
                        <li key="inputNum">
                            <label>Phone Number</label>
                            <br></br>
                                <input
                                name="phoneNumber"
                                type="text"
                                required
                                onChange = {this.handleInput}
                                ></input>
                        </li>
                        <li key="inputPeckupPoint">
                            <label>Peckup Point</label>
                            <br></br>
                            <select name="peckupPoint"
                                    onChange = {this.handleInput}>
                               <option value="point1">Point1</option> 
                               <option value="point2">Point2</option> 
                               <option value="point3">Point3</option> 
                               <option value="point4">Point4</option> 
                            </select>
                            
                        </li>
                        <li key="checkOutBtn">
                            <button  type="submit" className="checkout_btn"
                             
                            onSubmit={(event) => {
                                this.props.createOrder(event);
                            }}>
                                Checkout
                            </button>
                            <button className="checkout_btn" onClick={() => {
                            this.props.showCheckout();
                            }}>
                                Keep Buying
                            </button>
                        </li>
                    </ul>
                </form>
                </Fade>
            </div>
            </Fade>  
            </div>)}
            { order && (
            <Modal isOpen={true} onRequestClose={this.closeModal} >
                <Zoom>
                    
                        <div className="close_btn" onClick={this.closeModal}> 
                            <Zoom delay="100">
                            <div className="close_btn_bar1"></div>
                            <div className="close_btn_bar2"></div>
                            </Zoom>
                        </div>
                     <div className="checkOut_modal">
                        <div className="order_details">
                        <h3 className="success_message">Your order has been placed.</h3>
                        <h2>Order {order._id}</h2>
                        <ul>
                            <li>
                                <div>Name:</div>
                                <div>{order.name} </div>
                            </li>
                            <li>
                                <div>Phone Number:</div>
                                <div>{order.phoneNumber} </div>
                            </li>
                            <li>
                                <div>Peckup Point:</div>
                                <div>{order.peckupPoint} </div>
                            </li>
                            <li>
                                <div>Date:</div>
                                <div>{order.createdAt} </div>
                            </li>
                            <li>
                            <div>Cart Items:</div>
                            <div>
                                {cartItems.map((x) => (
                                <div>
                                {x.count} {" x "} {x.name}
                                </div>
                                ))}
                            </div>
                            </li>
                            <li>
                                <div>Total:</div>
                                <div>{order.total} </div>
                            </li>
                            <li>
                                <div>PAY BOX LINK:</div>
                                <link></link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    
                </Zoom>
            </Modal>
                )}
         

        </div>
        )
        
    }
}

export default connect((state) => ({
    order: state.order.order,
    cartItems: state.cart.cartItems,
 }),
 { createOrder, clearOrder}
 )(Checkout);
// try miking the checkout be on the shop component to be make it like login in some what
/*}
 */
