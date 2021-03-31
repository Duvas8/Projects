import React from 'react';
import classes from './Hader.module.css'

const header = () => ( 
  <div className = {classes.NavBar}>
      <div className = {classes.NavLogo}>LOGO</div>
      <ul className = {classes.NavItems}>
          <li> Shop </li>
          <li> Home</li>
      </ul>

    </div>
    )
   
export default header;