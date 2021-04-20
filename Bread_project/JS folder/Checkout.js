import React, { Component } from 'react'
import  './Checkout.css';

import formatCurrency from '../../../util'



export default class Checkout extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            phoneNumber:"",
            peckupPoint:""
         }
        };

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(e.target.value);
       };

       createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
            peckupPoint: this.state.peckupPoint,
            cartItems: this.props.cartItems,
        };
       
        this.props.createOrder(order)
    };

    render() {

        const {cartItems} = this.props;
        return (
            <div className="checkout_container">
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
                                this.props.createOrder(event)
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
                
            </div>
        )
    }
}


// try miking the checkout be on the shop component to be make it like login in some what
