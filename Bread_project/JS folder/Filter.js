import React, { Component } from 'react'
import { connect } from 'react-redux';
import {  filterShopItems, sortShopItems } from '../../../actions/shopItemActions'
import classes from '../Filter/Filter.module.css';

class Filter extends Component {
    render() {
        return !this.props.filteredItems? (
            <div className={classes.loading}>Loading...</div>
        ) :  (
            <div className={classes.Filter}>
                <div className={classes.filterResult}>{this.props.filteredItems.length} Prodacts</div>
                <div className={classes.filterSort}>
                     Order{" "} 
                <select
                 value={this.props.sort}
                  onChange={(e) =>
                     this.props.sortShopItems(
                      this.props.filteredItems,
                       e.target.value
                      )
                   }
                 >
                <option value='latest'>Latest</option>
                <option value='lowest'>Lowest To Highest</option>
                <option value='highest'>Highest To Lowest</option>
                    </select>
                    </div>
                <div className='filterFlourType'> 
                Flour Type{" "}
                <select
                 value={this.props.typeOfFlour} 
                    onChange={(e) =>
                        this.props.filterShopItems(
                           this.props.ShopItems,
                             e.target.value
                             )
                           }
                        >
                    <option value=''>ALL</option>
                    <option value='Wheat'>Wheat</option>
                    <option value='Simplify'>Simplify</option>
                    <option value='Spelt'>Spelt</option>
                    <option value='Grain'>Grain</option>
                    </select>
                    </div>
            </div>
        )
    }
}
export default connect((state) => ({
    typeOfFlour: state.ShopItems.typeOfFlour,
    sort: state.ShopItems.sort,
    ShopItems: state.ShopItems.items,
    filteredItems: state.ShopItems.filteredItems
}),
   {
    filterShopItems,
    sortShopItems,
   }
)(Filter);
