import React, { Component } from 'react'

import classes from '../Filter/Filter.module.css';

export default class Filter extends Component {
    render() {
        return (
            <div className={classes.Filter}>
                <div className={classes.filterResult}>{this.props.count} Prodacts</div>
                <div className={classes.filterSort}>
                     Order{" "} 
                <select value={this.props.sort} onChange={this.props.sortItems}>
                <option value='Latest'>Latest</option>
                <option value='Lowest'>Lowest To Highest</option>
                <option value='Highest'>Highest To Lowest</option>
                    </select>
                    </div>
                <div className='filterFlourType'> 
                Flour Type{" "}
                <select value={this.props.type} onChange={this.props.filterItems}>
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
