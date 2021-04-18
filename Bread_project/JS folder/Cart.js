import React, { Component } from 'react';
import './cart.css'

import formatCurrency from '../../../util'
import ShopItems from '../ShopItems/ShopItems';


export default class Cart extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div className="cart_container">
                {cartItems.length === 0 ? (
                 <div className="cart cart_header"> 
                Cart Is Empty
                </div>
                    ) : (
                <div className="cart cart_header">
                     You Have {cartItems.length} Itames In The Cart{""}
                </div>
                )}
                <div> 
                    <div className="cart">
                        <ul className="cart_items">
                            {cartItems.map((item , index ) => (
                                <li key={cartItems.id}>
                                    <div className="cart_image">
                                        <img src={item.image} alt={item.name}></img>
                                    </div> 
                                    <div className = "cartInfo">
                                            {item.name}
                                            {item.info}
                                            </div>
                                    <div className="cart_mengment">
                                       
                                        {formatCurrency(item.price)}
                                        <button onClick={() => this.props.addAmount(item)} className  = "Btn" > + </button>
                                        <button onClick={() => this.props.subAmount(item, index)} className  = "Btn" > - </button>
                                        <div className = "ItemCounte"> {item.count}</div>
                                        <button onClick={() => this.props.removeFromCart(index)}>
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
                {cartItems.length !== 0 && (
             <div className="cart">
                    <div className="total">
                        <div >
                            TOTAL{"   "}
                            {formatCurrency(
                                cartItems.reduce((a, c) => a + c.price * c.count, 0)
                            )}
                        </div>
                        <button className="proceed_Btn"> 
                            Proceed
                        </button>
                 </div> 
             </div>
             )}
                   
               
            </div>
        )
    }
}
