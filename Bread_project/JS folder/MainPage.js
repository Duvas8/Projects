import React from 'react';
import classes from './MainPage.module.css'
import Shop from '../../components/Shop/shop'

const mainPage = () => (
    <div className = {classes.MainContant}>
         <h1 className={classes.Title}> title </h1>
    <Shop />
    </div>
);

export default mainPage;