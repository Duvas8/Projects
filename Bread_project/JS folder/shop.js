import React , {Component} from 'react'

import Aux from '../../hoc/Aux'

import ShopItems from './ShopItems/ShopItems';
import data from '../../data.json'
import Filter from './Filter/Filter';
import Cart from './Cart/Cart';

class shop extends Component {
    
    constructor() {
        super();
        this.state = {
            shopItems: data.shopItems,
            cartItems: [],
            sort: "",
            type: ""
         }
        };


       


    removeFromCart = (index) => {
        const cartItems = [...this.state.cartItems];
        cartItems.splice(index, 1);
        this.setState({cartItems:cartItems});
        }
   

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
    };
    
    addAmount = (shopItem) => {
            const cartItems = this.state.cartItems;
            cartItems.forEach((x) => {
                if(x.id === shopItem.id){
                    x.count++
                }  
            })
            this.setState({cartItems})
        }

        subAmount = (shopItem, index) => {
            const cartItems = [...this.state.cartItems];
            cartItems.forEach((x) => {
                if(x.id === shopItem.id){
                    if(x.count === 1){
                   cartItems.splice(index, 1);
                   this.setState({cartItems:cartItems});
            }else{
                x.count-- 
            }
                   
                } 
                
            }) 
            
            
            this.setState({cartItems})
        }

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
        const shopItems = 
            <ShopItems
            shopItems = {this.state.shopItems}
            addToCart = {this.addToCart}
           
            key={this.state.id}
            />
     return(
         <Aux>
             <Filter count={this.state.shopItems.length}
             type={this.state.type}
             sort={this.state.sort}
             sortItems={this.sortItems}
             filterItems={this.filterItems}
             
             />
             {shopItems}
             <Cart 
             cartItems={this.state.cartItems} 
             removeFromCart={this.removeFromCart} 
             addAmount = {this.addAmount}
             subAmount = {this.subAmount}
             />
         </Aux>
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
