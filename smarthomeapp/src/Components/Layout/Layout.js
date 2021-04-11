import React from "react";
import { Container } from 'semantic-ui-react';
import './Layout.css';
import Nav from '../Nav/Nav';
import {Route} from 'react-router-dom';
import SmartHome from '../../containers/SmartHome/SmartHome';
import YourOrders from '../../containers/YourOrders/YourOrders';
import PlaceOrder from '../../containers/PlaceOrder/PlaceOrder';

        const Layout = (props) => {
            return (
            <Container>
                <Nav />
                <Route path="/" exact component={SmartHome} />
                <Route path="/orders" component={YourOrders} />
                <Route path="/place-order" component={PlaceOrder} />
            </Container>
            )
        };

export default Layout;