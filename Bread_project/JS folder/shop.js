import React , {Component} from 'react'

import Aux from '../../hoc/Aux'

import ShopItems from './ShopItems/ShopItems';

class shop extends Component {
    state = {
        shopItems: [
            {id: 'item1', name: 'bread1', image: 'image1', price: '1.00₪', info: "some info 1", amount: 1},
            {id: 'item2', name: 'bread2', image: 'image2', price: '2.00₪', info: "some info 2", amount: 0},
            {id: 'item3', name: 'bread3', image: 'image3', price: '3.00₪', info: "some info 3", amount: 0}
        ],
        
    };
    
    consolLogtest = () => {console.log(this.state.shopItems[0].amount)}

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
            
            />
     return(
         <Aux>
             {shopItems}
         </Aux>
       );    
      }
    };
    
export default shop;