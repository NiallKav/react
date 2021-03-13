import React, {useState} from 'react';
import Menu from '../../components/Menu/Menu';
import { Grid } from 'semantic-ui-react';
import Order from '../../components/Order/Order';
const orderToppings = [];

const PizzaPal = (props) => {

    const [menuState, setMenuState] = useState({
        toppings: [
          { id: 0, name: 'mozzarella', price: .75, image: 'images/toppings/mozzarella.jpg', alt: 'Mozzarella' },
          { id: 1, name: 'cheddar', price: .75, image: 'images/toppings/cheddar.jpg', alt: 'Cheddar' },
          { id: 2, name: 'basil', price: .5, image: 'images/toppings/basil.jpg', alt: 'Basil' },
          { id: 3, name: 'tomato', price: .5, image: 'images/toppings/tomato.jpg', alt: 'Tomato' },
          { id: 4, name: 'olives', price: .5, image: 'images/toppings/olives.jpg', alt: 'Olives' },
          { id: 5, name: 'onion', price: .5, image: 'images/toppings/onion.jpg', alt: 'Onion' },
          { id: 6, name: 'pineapple', price: .5, image: 'images/toppings/pineapple.jpg', alt: 'Pineapple' },
          { id: 7, name: 'mushroom', price: .5, image: 'images/toppings/mushroom.jpg', alt: 'Mushroom' },
          { id: 8, name: 'pepper', price: .5, image: 'images/toppings/pepper.jpg', alt: 'Pepper' },
          { id: 9, name: 'chili', price: .5, image: 'images/toppings/chili.jpg', alt: 'Chili' },
          { id: 10, name: 'jalapeno', price: .5, image: 'images/toppings/jalapeno.jpg', alt: 'Jalapeno' },
          { id: 11, name: 'bacon', price: 1, image: 'images/toppings/bacon.jpg', alt: 'Bacon' },
          { id: 12, name: 'ham', price: 1, image: 'images/toppings/ham.jpg', alt: 'Ham' },
          { id: 13, name: 'salami', price: 1, image: 'images/toppings/salami.jpg', alt: 'Salami' },
          { id: 14, name: 'bbq', price: .75, image: 'images/toppings/bbq.jpg', alt: 'BBQ Sauce' },
          { id: 15, name: 'hot', price: .75, image: 'images/toppings/hot.jpg', alt: 'Hot Sauce' },
        ]
      });
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

      console.log(orderState);
  return (
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
  />
  </Grid>
  )
};

export default PizzaPal;