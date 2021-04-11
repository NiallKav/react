import React, { useState } from "react";
import { Grid, Segment, Header, Button } from 'semantic-ui-react';
import OrderSummary from "../../components/Order/Checkout/OrderSummary/OrderSummary";
import { withRouter } from 'react-router-dom';


const PlaceOrder = (props) => {

    const [orderState, setOrderState] = useState({
        totalPrice: props.location.state.order.totalPrice, 
        chosenDevices: props.location.state.order.chosenDevices
      });  


      const cancelHandler = () => {
        props.history.push({
            pathname: '/', 
            state: {
              order: orderState, 
            }
          });
    };

  return (
    <Grid>
        <Grid.Row columns={2}>

            <Grid.Column width={6}>
                <Segment color='green'>
                    <Header as='h2' textAlign='center' color='green'>
                        Confirm your order:
                    </Header>
                    <OrderSummary
                        menu = {props.location.state.menu}
                        devices = {orderState.chosenDevices}
                        price = {orderState.totalPrice}
                    
                    />

                <Button color="red" onClick={cancelHandler}>Go Back</Button>
                </Segment>
            </Grid.Column>

            <Grid.Column width={10}>
                <Segment color='red'>
                        <Header as='h2' textAlign='center' color='green'>
                            Enter your details:
                        </Header>
                        Form goes here
                    </Segment>
            </Grid.Column>

        </Grid.Row>
    </Grid>
  )
};

export default withRouter(PlaceOrder);