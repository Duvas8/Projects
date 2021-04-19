import React, { Component } from 'react'
import  '../Cart/cart.css';




export default class Checkout extends Component {
    render() {
        return (
            <div className="checkout_container">
                <form onSubmit={this.createOrder}>
                    <ul className="form_container">
                        <li>
                            <label>Name</label>
                            <br></br>
                                <input
                                name="Name"
                                type="text"
                                required
                                onChange = {this.handleInput}
                                ></input>
                        </li>
                        <li>
                            <label>Phone Number</label>
                            <br></br>
                                <input
                                name="Phone Number"
                                type="text"
                                required
                                onChange = {this.handleInput}
                                ></input>
                        </li>
                        <li>
                            <label>Peckup Point</label>
                            <br></br>
                            <select>
                               <option value="point1">Point1</option> 
                               <option value="point2">Point2</option> 
                               <option value="point3">Point3</option> 
                               <option value="point4">Point4</option> 
                            </select>
                            
                        </li>
                    </ul>
                </form>
                
            </div>
        )
    }
}


// try miking the checkout be on the shop component to be make it like login in some what
