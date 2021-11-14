import React from 'react';
import store from '../../reduxStore';
import { Provider } from 'react-redux';
import AdminContent from './AdminContent';

const Admin = () => (
    <Provider store={store}>
        
        <AdminContent/>
    </Provider>
)
   
export default Admin