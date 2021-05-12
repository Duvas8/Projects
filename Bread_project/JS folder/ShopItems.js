import React, { Component } from "react";

import classes from '../ShopItem/ShopItem.module.css';
import formatCurrency from '../../../util'
import Axu from '../../../hoc/Aux.js'
import { Fade } from "react-awesome-reveal";
import Modal from 'react-modal'
import { Zoom } from "react-awesome-reveal";
import { connect} from 'react-redux';
import { fetchShopItems } from '../../../actions/shopItemActions'

class ShopItems extends Component {
    constructor(props){
        super(props) 
            this.state = {
                shopItem: null,
            };
    }

    componentDidMount(){
        this.props.fetchShopItems();
    }

  // take the the shop item/product that the user click on and make the the shopItem equl to the shop item/product
    openModal = (shopItem) => {
        this.setState({shopItem})
    }
    // this fuc makes the modal unvisable, return it to the original state of null
    closeModal = () => {
        this.setState({shopItem: null})
    }
    
render() {
    // creates to shop item for the modal in the react render
    const { shopItem } = this.state;

    return (
    <Axu>
        <div className={classes.cart_Icon} onClick={() => {
            this.props.openCart();
        }}>
            <img alt='cart-icon' src='./Images/icons8-shopping-cart-32.png'></img>
        </div>
    <Fade direction='up' triggerOnce cascade duration="750">
        { !this.props.ShopItems ? (
        <div>Loading...</div>
        ) : (
        <ul className={classes.shopItem_container}>
            { this.props.shopItems.map((shopItem ) => (
                <li key={shopItem.id}>
                    <div  className = {classes.ShopItem}>
                        <div className = {classes.Image}>
                            <a herf = {"#" + shopItem.id} 
                            onClick={() => {this.openModal(shopItem)}}>
                            <img src = {shopItem.image} alt="bread_image" ></img>
                            </a>
                        </div>
                        <div className={classes.productInfo_Container}>
                            <div> LOGO </div>
                            <div className={classes.productInfo}>
                            <h2>{shopItem.name}</h2>
                                <p>{shopItem.info}</p>
                            </div>
                            <div >
                                <p> Phone Number</p>
                                <div className={classes.flourType_Container} >
                                    {shopItem.flourType.map((x)=>(  
                                    <div>{" "}{x}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                            <p className = {classes.price} >{formatCurrency(shopItem.price)}</p>
                            <div className = {classes.amountControlContainer}>
                                <button onClick={() => this.props.addToCart(shopItem)} className  = {classes.Btn} > Add To Cart</button>
                            </div>
                    </div>
                    </li>
                ))
            }
    </ul>
    )}
     
  </Fade>
   {shopItem && (
        <Modal isOpen={true}
        onRequestClose={this.closeModal}>
            <Zoom>
                <div>
                
                    <div className={classes.close_btn} onClick={() => {this.closeModal()}}>
                        <Zoom delay="100">
                        <div className={classes.close_btn_bar1}></div>
                        <div className={classes.close_btn_bar2}></div>
                        </Zoom>
                    </div>
                    
                    <div className={classes.ShopItem_details}>
                    <a herf = {"#" + shopItem.id} className={classes.Image_modal_container}>
                    <img src = {shopItem.image} alt="bread_image" className={classes.Image_modal} ></img>
                    </a>
                    <div className={classes.ShopItem_details_discription}>
                    <div className={classes.productInfo_Container}>
                            <div> LOGO </div>
                            <div className={classes.productInfo}>
                            <h2>{shopItem.name}</h2>
                                <p>{shopItem.info}</p>
                            </div>
                            <div >
                                <p> Phone Number</p>
                                <div className={classes.flourType_Container} >
                                    {shopItem.flourType.map((x)=>(  
                                    <div>{" "}{x}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                            
                        </div>
                        <p className = {classes.price_modal} >{formatCurrency(shopItem.price)}</p>
                            <div className = {classes.amountControlContainer}>
                                <button onClick={() => this.props.addToCart(shopItem)} className  = {classes.Btn} > Add To Cart</button>
                            </div>
                     </div>
                </div>
            </Zoom>
        </Modal>
    )}
    </Axu> 
       )
  }
};
// export the shop items and conets the redux to the component
export default connect((state) => ({ShopItems: state.ShopItems.items}), 
{fetchShopItems})
(ShopItems);


     /* <button onClick={shopItem.addItem} className  = {classes.Btn} > + </button>
                    <div className = {classes.ItemCounte}>  </div>
                    <button onClick={shopItem.subItem} className  = {classes.Btn} > - </button> 
                    
                    .Btn { 
    display: flex;
    color: burlywood;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    font-size: 2rem;
    background-color: white;
    border: none;
    padding: 7%;
    margin: 10%;
    box-shadow:  1px 3px 6px darkgrey ;
}<div className = {classes.ShopItem_containr}> </div>

    /* */


    // <h2>{shopItem.name}</h2>
   // <p className = {classes.info} >{shopItem.info}</p>
