import React, {Component} from "react";

import ShopItem from "../ShopItem/ShopItem";



class ShopItems extends Component {
render() {
 return this.props.shopItems.map((shopItem) => {
    return (
      <ShopItem
        addItem = { event => this.props.addItem(event  , shopItem.id)}
        subItem = { event => this.props.subItem(event  , shopItem.id)}
        name={shopItem.name}
        key={shopItem.id}
        itemPrice = {shopItem.price}
        itemInfo = {shopItem.info}
        itemAmount = {shopItem.amount}
      />
       )})
  }
};

export default ShopItems;