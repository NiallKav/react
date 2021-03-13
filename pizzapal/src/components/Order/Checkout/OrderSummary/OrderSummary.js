import React from "react";
import { Header, List } from 'semantic-ui-react';
const OrderSummary = (props) => {
  
  const toppingIdsArray = [];
  for(let i in props.toppings){
      toppingIdsArray.push(props.toppings[i].id);
  };

  const countOccurrences = (array, value) => array.reduce((count, num) => (num === value ? count + 1 : count), 0);

  const toppingsSummary = [];

  for(let id=0; id<16; id++){

    // use countOccurences to count occurences of each id
    let toppingCount = countOccurrences(toppingIdsArray, id);
    if (toppingCount > 0) {
      const toppingWithCount = {
        id: id,
        name: props.menu[id].alt,
        count: toppingCount
    };

    toppingsSummary.push(toppingWithCount);
    }
}
  
  return (
    <div>
       <Header as='h3'>
         Your Pizza: 
        </Header>
        <List divided verticalAlign='middle'>
      {toppingsSummary.map((topping) => {
          return( 
              <List.Item key={topping.id}>
                  {topping.name}: {topping.count}
              </List.Item>
          )
      })}
  </List>
  <Header as='h4' className='h4margin'>
      Total Price: &euro; {props.price.toFixed(2)}
  </Header>
    </div>
  )
};

export default OrderSummary;
