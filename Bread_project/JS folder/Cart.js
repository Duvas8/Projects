import React, { useRef } from 'react';
import './cart.css'
import { useIntersection } from 'react-use';

import formatCurrency from '../../../util'
import { Fade } from "react-awesome-reveal";



export default function Cart (props) {
     
    
        
        const sectionRef = useRef(null);

        

        const intersection = useIntersection(sectionRef, {
            root: null,
            rootMargin: "80%",
            threshold: 0.1,
        });


        
        
         
        const { cartItems } = props;
        return (
            <div className="container" >
                <div className="cart_container" ref={sectionRef}>
                 <div className="cart_icon_container">
                     <div  className={intersection && intersection.intersectionRatio < 0.8? "cart_Icon" : "cart_Icon_Btn"} onClick={() => {
                    props.openCart();
                    }}>
                        <img alt='cart-icon' src='./Images/icons8-shopping-bag-32.png' ></img>
                 </div>
                
              </div> 
               
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
                        <Fade direction="up" triggerOnce cascade duration="750">
                        <ul className="cart_items">
                            {cartItems.map((item , index ) => (
                                <li key={index}>
                                    <div className="cart_image">
                                        <img src={item.image} alt={item.name}></img>
                                    </div> 
                <div className="ShopItem_details_discription">
                    <div className="productInfo_Container">
                            <div> LOGO </div>
                            <div className="productInfo">
                            <h2>{item.name}</h2>
                                <p>{item.info}</p>
                            </div>
                            <div >
                                <p> Phone Number</p>
                                <div className="flourType_Container" >
                                    {item.flourType.map((x)=>(  
                                    <div>{" "}{x}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                            
                        </div>
                                    <div className="cart_mengment">
                                      
                                        {formatCurrency(item.price)}
                                       
                                        <div className="btn_containar">
                                            
                                            <button onClick={() => props.addAmount(item)} className  = "Btn" > + </button>
                                            <div className = "ItemCounte"> {item.count}</div>
                                            <button onClick={() => props.subAmount(item, index)} className  = "Btn" > - </button>
                                        </div>
                                        <button className="cart_item_remove" onClick={() => props.removeFromCart(index)}>
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ))}

                        </ul>
                        </Fade>
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
                        <button className="proceed_Btn" onClick={() => {
                            props.showCheckout();
                            }}> 
                            Proceed
                        </button>
                 </div> 
             </div>
             )} 
            </div>
            </div>
            
        )
    }

    

    //render() {

        /*const element = document.querySelector(".cart_Icon")

        const addCartBtn = element => {
            element.classList.add("cart_Icon_Btn")
            console.log("work add")
        }
        const removeCartBtn = element => {
            element.classList.remove("cart_Icon_Btn")
            console.log("work r")
        }

         if (intersection && intersection.intersectionRatio < 0.2) {
             addCartBtn() 
            } else {
            removeCartBtn()
         }*/
          

