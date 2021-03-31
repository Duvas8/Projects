import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './ShopItem.module.css';

class ShopItem extends Component {

    render () {
        return (
        <div  className = {classes.ShopItem}>
            <div className = {classes.Image}>
            </div>
            
                <h2>{this.props.name}</h2>
                <p className = {classes.info}>{this.props.itemInfo}</p>
                <p className = {classes.price}>{this.props.itemPrice}</p>
                <div className = {classes.amountControlContainer}>
                    <button onClick={this.props.addItem} className  = {classes.Btn} > + </button>
                    <div className = {classes.ItemCounte}> {this.props.itemAmount} </div>
                    <button onClick={this.props.subItem} className  = {classes.Btn} > - </button>
                </div>
            
        </div>
      );
     };
};


export default ShopItem;