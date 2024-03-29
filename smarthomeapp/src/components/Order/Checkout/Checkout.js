import React from "react";
import { Grid, Header } from 'semantic-ui-react';
import OrderSummary from './OrderSummary/OrderSummary';
import OrderModal from './OrderModal/OrderModal';

        const Checkout = (props) => {
        return (
            <Grid.Column width={6} textAlign='right'>
            <Header as='h2' textAlign='center' className='step'>
                Step 2: Check Out 
            </Header>
            <OrderSummary
                menu = {props.menu}
                devices = {props.devices}
                price = {props.price}
            
            />
            <OrderModal 
                menu = {props.menu}
                devices = {props.devices}
                price = {props.price}
                checkout = {props.checkout}
                disabled={props.disabled}
            
            />
        </Grid.Column>
        )
        };

export default Checkout;
