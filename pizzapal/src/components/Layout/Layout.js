import React from "react";
import {Container} from 'semantic-ui-react';
import './Layout.css';

import {Route} from 'react-router-dom';
import Nav from '../Nav/Nav';
import PizzaPal from '../../containers/PizzaPal/PizzaPal';
import YourOrders from '../../containers/YourOrders/YourOrders';
import PlaceOrder from '../../containers/PlaceOrder/PlaceOrder';


const Layout = (props) => {
  return (
    <Container>
        <Nav />
        <Route path="/" exact component={PizzaPal} />
        <Route path="/orders" component={YourOrders} />
        <Route path="/place-order" component={PlaceOrder} />
    </Container>
  )
};

export default Layout;