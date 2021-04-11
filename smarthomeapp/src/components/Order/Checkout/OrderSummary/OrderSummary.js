import React from "react";
import { Header, List } from 'semantic-ui-react';


        const OrderSummary = (props) => {

          
          
        let summary = null;

        if(props.devices.length > 0){
    
            summary = (
    
              <div>
              <Header as='h3'>
                Your Basket: 
            </Header>
            
            <List divided verticalAlign='middle'>
                    {props.devices.map((devices) => {
                        return( 
                            <List.Item key={devices.id}>
                                {devices.name}: {devices.count}
                            </List.Item>
                        )
                    })}
            </List>

          <Header as='h4' className='h4margin'>
              Total Price: &euro; {props.price.toFixed(2)}
          </Header>
            </div>
            );
        }

        else{
          summary = (
              <div>
                  <Header as='h4' className="h4margin">
                      Start Adding Your Devices! 
                  </Header>
              </div>
          );
      }


          return (

            <div>
            {summary}
        </div>
            
          )
        };

export default OrderSummary;
