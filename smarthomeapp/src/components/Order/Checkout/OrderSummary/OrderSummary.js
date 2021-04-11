import React from "react";
import { Header, List } from 'semantic-ui-react';

        const OrderSummary = (props) => {

          const devicesIdsArray = [];
          for(let i in props.devices){
              devicesIdsArray.push(props.devices[i].id);
          };

          const countOccurrences = (array, value) => array.reduce((count, num) => (num === value ? count + 1 : count), 0);

          const devicesSummary = [];

          for(let id=0; id<16; id++){

          
            let devicesCount = countOccurrences(devicesIdsArray, id);

            if (devicesCount > 0) {

              const devicesWithCount = {
                id: id,
                name: props.menu[id].alt,
                count: devicesCount
            };

            devicesSummary.push(devicesWithCount);

            }
      
        }
          
        let summary = null;

        if(props.devices.length > 0){
    
            summary = (
    
              <div>
              <Header as='h3'>
                Your Basket: 
            </Header>
            
            <List divided verticalAlign='middle'>
                    {devicesSummary.map((devices) => {
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
