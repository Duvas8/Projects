
import React from 'react';
import Aux from '../../hoc/Aux'
import Hader from '../../containers/Hader/Hader'
import MainPage from '../../containers/MainPage/MainPage'
import Shop from '../Shop/shop'
import './Layout.css'
import Admin from '../Admin/Admin'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';


const layout = () => (
     
           <Router>
                <div className = "NavBar">
                    <Hader />
                </div>
           
                
                    <Switch>
                    <Aux>     
                    <div  className = "MainContant">
                        <Route path="/" exact component={MainPage} />
                        <Route path="/Shop" component={Shop} />
                    </div>
                    <div className = "AdminPage">
                    <Route path="/Admin" component={Admin} />
                    </div>
                     </Aux>
                    </Switch>    
                   
            </Router>
      
);
    
         

export default layout;
