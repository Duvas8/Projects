
import React from 'react';

import Aux from '../../hoc/Aux'
import Hader from '../../containers/Hader/Hader'
import MainPage from '../../containers/MainPage/MainPage'



const layout = (props) => (
       <Aux >  
           <Hader />
           <MainPage />
           <main>
               
               {props.children}
            </main>
       </Aux>
);
    
         

export default layout;