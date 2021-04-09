import React, { useState } from "react";
import { Grid, Segment, Header, Button } from 'semantic-ui-react';
import OrderSummary from "../../components/Order/Checkout/OrderSummary/OrderSummary";
import { withRouter } from 'react-router-dom';



const PlaceOrder = (props) => {

    const [orderState, setOrderState] = useState({
        totalPrice: props.location.state.order.totalPrice, 
        chosenToppings: props.location.state.order.chosenToppings
      });  

  return (
    <Grid>
        <Grid.Row columns={2}>

            <Grid.Column width={6}>
                <Segment color='red'>
                    <Header as='h2' textAlign='center' color='red'>
                        Confirm your order:
                    </Header>
                    <OrderSummary 
                        menu = {props.location.state.menu}
                        toppings = {orderState.chosenToppings}
                        price = {orderState.totalPrice}
                    />

                    <Button color="red">Go Back</Button>
                </Segment>
            </Grid.Column>

            <Grid.Column width={10}>
                <Segment color='red'>
                        <Header as='h2' textAlign='center' color='red'>
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
