import React from "react";
import { Header, Segment, Image } from 'semantic-ui-react';

const OrderSuccess = (props) => {
  return (
    <Segment color='red'>
        <Header as='h2' textAlign='center' color='red'>
          Your Order Is On The Way!
        </Header>
        <Image src='/images/delivery.gif' size='medium' centered />
    </Segment>
  )
};

export default OrderSuccess;
