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
        this.setState({openCartStatus:!this.state.openCartStatus});
    }

 
    
  
   

    


    render() {
       
           
     return( 
    <Provider store={store}>
         <Aux>
             {!this.state.openCartStatus ? ( <div>
                  <Filter 
             />
              <ShopItems
           
           
            openCart = {this.openCart}
            /> 
            </div>
            ) : ( <div> <Cart 
             showCheckout = {this.showCheckout}
             openCart = {this.openCart}
             />
             </div>
             )}
            {this.state.showCheckout && ( 
               <Checkout 
               
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
    }; 
    cartItems={this.state.cartItems}
    */
