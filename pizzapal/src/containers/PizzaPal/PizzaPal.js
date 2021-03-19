import React, { useState, useEffect } from "react";
import Menu from '../../components/Menu/Menu';
import { Grid, Message } from 'semantic-ui-react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
const orderToppings = [];

const PizzaPal = (props) => {

  const [menuState, setMenuState] = useState({
    toppings: [], 
    error: false
  });

  useEffect(() => {
    axios.get('/toppings.json')
    .then(response => {
      setMenuState({toppings: response.data, error: false});
    })
    .catch(error => {
      setMenuState({toppings: menuState.toppings, error: true});
      console.log(error);
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


      let checkoutDisabled = true;

      if (orderState.chosenToppings.length > 0){
        checkoutDisabled = false;
      }

      const checkoutHandler = () => {
        axios.post('/orders.json', orderState)
        .then(response => {
            alert('Order saved!');
            console.log(response);
        })
        .catch(error => {
        setMenuState({toppings: menuState.toppings, error: true});
        alert('Something went wrong :(');
        console.log(error);
        });
    }

    let pizzapalMenu = menuState.error ? <Message><p>Pizza Pal menu can't be loaded!</p></Message> : <Message><p>Menu loading...</p></Message>;
  
    if (menuState.toppings.length > 0) {
      pizzapalMenu = (
          <Grid divided='vertically' stackable>
          <Grid.Row centered>
              <Menu menu={menuState.toppings} />
          </Grid.Row>
          <Order 
            menu={menuState.toppings}
            toppingAdded={addToppingHandler}
            toppingRemoved={removeToppingHandler}
            chosenToppings={orderState.chosenToppings}
            totalPrice={orderState.totalPrice}
            checkout={checkoutHandler}
            disabled={checkoutDisabled}
            />
          </Grid>
      );
  }

    return (
      <div>
      {pizzapalMenu}
    </div>
  )
};

export default PizzaPal;