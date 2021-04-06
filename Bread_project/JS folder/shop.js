import React , {Component} from 'react'

import Aux from '../../hoc/Aux'

import ShopItems from './ShopItems/ShopItems';
import data from '../../data.json'
import Filter from './Filter/Filter';

class shop extends Component {
    
    constructor() {
        super();
        this.state = {
            shopItems: data.shopItems,
            sort: "",
            type: ""
         }
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
        
    }

    consolLogtest = (event , id) => {
        const itemIndex = this.state.shopItems.findIndex(item => {
            return item.id === id;
          });
          let itemAmount = this.state.shopItems[itemIndex].amount
          this.setState((itemAmount) => {
              return {
                amount: this.state.shopItems[itemIndex].amount +  1
              }
          })
        console.log(this.state.shopItems[itemIndex].amount)
    };

    addItemHandler = (event, id) => {
        const itemIndex = this.state.shopItems.findIndex(item => {
            return item.id === id;
          });
        const shopItem = {
            ...this.state.shopItems[itemIndex]
        };
        const shopItems =  [...this.state.shopItems];
        shopItems[itemIndex] = shopItem;
       

        this.setState((prevState, props) => {
            return {
                shopItems: shopItems,
                amount: prevState.amount + 1
            };
        });
    };

    subItemHandler = (event, id) => {
        const itemIndex = this.state.shopItems.findIndex(item => {
            return item.id === id;
          });
        const shopItem = {
            ...this.state.shopItems[itemIndex]
        };
        const shopItems =  [...this.state.shopItems];
        shopItems[itemIndex] = shopItem;

        this.setState((prevState, props) => {
           if(this.state.shopItems.amount != 0) {
               return {
                shopItems: shopItems,
                amount: prevState.amount - 1
            };
          };
        })
    };

    render() {
        const shopItems = 
            <ShopItems
            shopItems = {this.state.shopItems}
            addItem = {this.consolLogtest}
            subItem = {this.subItemHandler}
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
         </Aux>
       );    
      }
    };
    
export default shop;
