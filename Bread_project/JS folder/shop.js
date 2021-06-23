import React , {Component} from 'react'

import Aux from '../../hoc/Aux.js'

import ShopItems from './ShopItems/ShopItems.js';

import Filter from './Filter/Filter';
import Cart from './Cart/Cart';
import Checkout from '../Shop/Checkout/Checkout'
import store from '../../reduxStore';
import { Provider } from 'react-redux';


class shop extends Component {
    
    constructor() {
        super();
        this.state = {
           
        
            cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[],
           
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
// function that Remove item from cart    
    removeFromCart = (index) => { 
        //take the index of the item as a parameter
        const cartItems = [...this.state.cartItems];
        // spred the array so react could save the state with out Chaingin it 
        cartItems.splice(index, 1);
        // uses splice to Remove the item with the index that was given
        this.setState({cartItems:cartItems});
        // now react can marge the state and Update  the state
        localStorage.setItem("cartItems", JSON.stringify(cartItems)); 
        // save the new deta of the state cart item to the local storage of the brwoser
        };
   
//
    addToCart = (shopItem) => {
        const cartItems = this.state.cartItems.slice();
        let alredyInCart = false;
        cartItems.forEach((x) => {
            if(x._id === shopItem._id){
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
                if(x._id === shopItem._id){
                    x.count++
                }  
            })
            this.setState({cartItems})
        };

        subAmount = (shopItem, index) => {
            const cartItems = [...this.state.cartItems];
            cartItems.forEach((x) => {
                if(x._id === shopItem._id){
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

   

    


    render() {
       
           
     return( 
    <Provider store={store}>
         <Aux>
             {!this.state.openCartStatus ? ( <div>
                  <Filter 
             />
              <ShopItems
           
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
        
        }
         sortItems = (event) => {
        //impl
        console.log(event.target.value)
        const sort = event.target.value;
        this.setState((state) => ({
            sort: sort,
            shopItems: this.state.shopItems.slice().sort((a,b) => 
            sort ==="Lowest"
            ? a.price > b.price 
                ? 1 
                : -1
            : sort === "Highest"
            ? a.price < b.price
                ? 1
                : -1
            : a._id > b._id
                ? 1
                : -1
            ),
        })
        )
    };

    filterItems = (event) => {
        //impl
        console.log(event.target.value)
        if(event.target.value === ""){
            this.setState({typeOfFlour: event.target.value , shopItem: data.shopItems})
            console.log(event.target.value)
        }else{
            this.setState({
            tytypeOfFlourpe: event.target.value,
            shopItems: data.shopItems.filter(
                (shopItem) => shopItem.flourType.indexOf(event.target.value) >= 0 
            ),
        });
        }
        
count={this.state.shopItems.length}
             type={this.state.type}
             sort={this.state.sort}
             filterItems={this.filterItems}
             sortItems={this.sortItems}

 shopItems = {this.state.shopItems}
    }; */
