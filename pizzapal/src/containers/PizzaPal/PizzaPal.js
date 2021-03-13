import React, { useState, useEffect } from "react";
import Menu from '../../components/Menu/Menu';
import { Grid } from 'semantic-ui-react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
const orderToppings = [];

const PizzaPal = (props) => {

  const [menuState, setMenuState] = useState({
    toppings: []
  });

  useEffect(() => {
    axios.get('/toppings.json')
    .then(response => {
      setMenuState({toppings: response.data});
      console.log(response);
    });
}, [])
      const [orderState, setOrderState] = useState({
        totalPrice: 5, 
        chosenToppings: []
      });

      const addToppingHandler = (id) => {
        const index = menuState.toppings.findIndex(topping => topping.id === id);
        const chosenTopping = {
          id: menuState.toppings[index].id,
          name: menuState.toppings[index].alt,
          price: menuState.toppings[index].price
        };

        orderToppings.push(chosenTopping);

        const newPrice = orderState.totalPrice + menuState.toppings[index].price;

        setOrderState({
          totalPrice: newPrice,
          chosenToppings: orderToppings
        });
      }

      const removeToppingHandler = (id) => {
        const index = orderState.chosenToppings.findIndex(topping => topping.id === id);

        let price = orderState.totalPrice; 

        if(index >= 0){
          price = price - orderState.chosenToppings[index].price;
          orderToppings.splice(index, 1);

        }
        setOrderState({
          totalPrice: price,
          chosenToppings: orderToppings
        });
        console.log(id);
      }

      const checkoutHandler = () => {
        axios.post('/orders.json', orderState)
        .then(response => {
            alert('Order saved!');
            console.log(response);
        });
    }
  return (
    <Grid divided='vertically' stackable>
        <Grid.Row centered>
            <Menu menu={menuState.toppings} />
        </Grid.Row>
        <Order 
          menu={menuState.toppings}
          chosenToppings={orderState.chosenToppings}
          totalPrice={orderState.totalPrice}
          toppingAdded={addToppingHandler}
          toppingRemoved={removeToppingHandler}
          checkout={checkoutHandler}
  />
  </Grid>
  )
};

export default PizzaPal;