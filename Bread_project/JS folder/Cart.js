import React, { Component } from 'react';
import './cart.css'


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
                            {cartItems.map(item => (
                                <li key={cartItems.id}>
                                    <div className="cart_image">
                                        <img src={item.image} alt={item.name}></img>
                                    </div>
                                    <div>
                                        <div>{item.name}</div>
                                        <button onClick={() => this.props.removeFromCart(item)}>
                                            Remove
                                        </button>

                                    </div>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
               
            </div>
        )
    }
}
