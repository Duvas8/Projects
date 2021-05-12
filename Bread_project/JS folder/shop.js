import React , {Component} from 'react'

import Aux from '../../hoc/Aux.js'

import ShopItems from './ShopItems/ShopItems.js';
import data from '../../data.json'
import Filter from './Filter/Filter';
import Cart from './Cart/Cart';
import Checkout from '../Shop/Checkout/Checkout'
import store from '../../reduxStore';
import { Provider } from 'react-redux';


class shop extends Component {
    
    constructor() {
        super();
        this.state = {
            shopItems: data.shopItems,
            cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[],
            sort: "",
            type: "",
            name: "",
            phoneNumber:"",
            peckupPoint:"",
            showCheckout:false,
            openCartStatus:false,
         }
        };

    

    createOrder = (order) => {
        alert("Need to save order for" + order.name)
        };
    
// show checkout when the user click on the "procide button"
    showCheckout = () => {
        this.setState({showCheckout:!this.state.showCheckout});
        
    }
// make the cart component visable
    openCart = () => {
        this.setState({openCartStatus:!this.state.openCartStatus})
        console.log();
    }
    
    removeFromCart = (index) => {
        const cartItems = [...this.state.cartItems];
        cartItems.splice(index, 1);
        this.setState({cartItems:cartItems});
        localStorage.setItem("cartItems", JSON.stringify(cartItems)); //mybe i will need too add this.state before the cartItems
        };
   

    addToCart = (shopItem) => {
        const cartItems = this.state.cartItems.slice();
        let alredyInCart = false;
        cartItems.forEach((x) => {
            if(x.id === shopItem.id){
                x.count++;
                alredyInCart = true;
            }
        })
        if(!alredyInCart){
            cartItems.push({...shopItem, count: 1})
        }
        this.setState({cartItems})
        console.log(cartItems);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };
    
    addAmount = (shopItem) => {
            const cartItems = this.state.cartItems;
            cartItems.forEach((x) => {
                if(x.id === shopItem.id){
                    x.count++
                }  
            })
            this.setState({cartItems})
        };

        subAmount = (shopItem, index) => {
            const cartItems = [...this.state.cartItems];
            cartItems.forEach((x) => {
                if(x.id === shopItem.id){
                    if(x.count === 1){
                   cartItems.splice(index, 1);
                   this.setState({cartItems:cartItems});
                   localStorage.setItem("cartItems", JSON.stringify(cartItems));
            }else{
                x.count-- 
            }
                   
                } 
                
            }) 
            
            
            this.setState({cartItems})
        };

    sortItems(event){
        //impl
        console.log(event.target.value)
    };

    filterItems = (event) =>{
        //impl
        
        if(event.target.value === ""){
            this.setState({type: event.target.value , shopItem: data.shopItems})
            console.log(event.target.value)
        }else{
            this.setState({
            type: event.target.value,
            ShopItems: data.shopItems.filter(
                (shopItem) => shopItem.flourType.indexOf(event.target.value) >= 0 
            ),
        })
        }
        
    };

    


    render() {
       
           
     return( 
    <Provider store={store}>
         <Aux>
             {!this.state.openCartStatus ? ( <div>
                  <Filter count={this.state.shopItems.length}
             type={this.state.type}
             sort={this.state.sort}
             sortItems={this.sortItems}
             filterItems={this.filterItems}

             />
              <ShopItems
            shopItems = {this.state.shopItems}
            addToCart = {this.addToCart}
            openCart = {this.openCart}
            /> 
            </div>
            ) : ( <div> <Cart 
             cartItems={this.state.cartItems} 
             removeFromCart={this.removeFromCart} 
             addAmount = {this.addAmount}
             subAmount = {this.subAmount}
             showCheckout = {this.showCheckout}
             openCart = {this.openCart}
             />
             </div>
             )}
            {this.state.showCheckout && ( 
               <Checkout 
               cartItems={this.state.cartItems}
               showCheckout = {this.showCheckout}
               createOrder = {this.createOrder}
               />
               )}
             
               
             
            
         </Aux>
    </Provider>
       );    
      }
    };
    
export default shop;




/* THIS IS FROM THE VIDEO  AND IWASNT ABLE TO IMPLEMENT IT

removeFromCart = (shopItem) => {
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems:cartItems.filter((x) => x.id !== shopItem.id)
        })
        
        } */
