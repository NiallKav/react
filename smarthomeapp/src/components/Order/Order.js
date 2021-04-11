import React from "react";
import { Grid } from 'semantic-ui-react';
import Controls from './Controls/Controls';
import Checkout from './Checkout/Checkout';

        const Order = (props) => {
        return (
            <Grid.Row columns={2} centered>
                <Controls 
                menu={props.menu}
                devicesAdded = {props.devicesAdded}
                devicesRemoved = {props.devicesRemoved}
                />
                <Checkout
                    menu = {props.menu}
                    devices={props.chosenDevices}
                    price={props.totalPrice}
                    checkout={props.checkout}
                    checkout={props.checkout}
                    disabled={props.disabled}
                
                />
            </Grid.Row>
        )
        };

export default Order;
