import React, { useState, useEffect } from "react";
import Menu from '../../components/Menu/Menu';
import { Grid, Message } from 'semantic-ui-react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';

let orderDevices = [];

const SmartHome = (props) => {

    const [menuState, setMenuState] = useState({
        devices: [],
        error: false

    });

    useEffect(() => {
        axios.get('/devices.json')
        .then(response => {
          setMenuState({devices: response.data, error: false});
        })
        .catch(error => {
          setMenuState({devices: menuState.devices, error: true});
          console.log(error);
        });
    }, [])
        
        //   { id: 0, name: 'lightbulb_one', price: 5, image: 'images/devices/light_bulb_one.jpg', alt: ' Bulb Multi ' },
        //   { id: 1, name: 'lightbulb_two', price: 5, image: 'images/devices/light_bulb_two.jpg', alt: 'Bulb Blue' },
        //   { id: 2, name: 'lightbulb_three', price: 5, image: 'images/devices/light_bulb_three.jpg', alt: 'Bulb Yellow' },
        //   { id: 3, name: 'lightbulb_four', price: 5, image: 'images/devices/light_bulb_four.jpg', alt: 'Bulb Purple ' },
        //   { id: 4, name: 'lightstrip_one', price: 7.5, image: 'images/devices/light_strip_one.jpg', alt: 'Strip Purple' },
        //   { id: 5, name: 'lightstrip_two', price: 7.5, image: 'images/devices/light_strip_two.jpg', alt: 'Strip Yellow' },
        //   { id: 6, name: 'wifi_socket', price: 8, image: 'images/devices/wifi_socket.jpg', alt: 'WIFI Socket' },
        //   { id: 7, name: 'motion_sensor', price: 15, image: 'images/devices/motion_sensor.jpg', alt: 'Motion Sensor' },
        //   { id: 8, name: 'security_camera', price: 25, image: 'images/devices/security_camera.jpg', alt: 'CC Camera ' },
        //   { id: 9, name: 'smart_timer', price: 15.5, image: 'images/devices/smart_timer.jpg', alt: 'Smart Timer' },
        //   { id: 10, name: 'smart_switch_controller', price: 17.5, image: 'images/devices/smart_switch_controller.jpg', alt: ' Switch ' },
        //   { id: 11, name: 'spot_light', price: 12, image: 'images/devices/spot_light.jpg', alt: 'Spot Light' },
        //   { id: 12, name: 'tape_light', price: 11, image: 'images/devices/tape_light.jpg', alt: 'Tape Light' },
        //   { id: 13, name: 'down_light', price: 31, image: 'images/devices/down_light.jpg', alt: 'Down Light' },
        //   { id: 14, name: 'carbon_monoxide_alarm', price: 8.75, image: 'images/devices/carbon_monoxide_alarm.jpg', alt: 'C02 Alarm' },
        //   { id: 15, name: 'google_home_hub', price: 35, image: 'images/devices/google_home_hub.jpg', alt: ' Home Hub' },
        // ]
      
      const [orderState, setOrderState] = useState({
        totalPrice: 0, 
        chosenDevices: []
      });



      const addDevicesHandler = (id) => {
        const menuIndex = menuState.devices.findIndex(devices => devices.id === id);
  
      
      const orderIndex = orderDevices.findIndex(devices => devices.id === id);
  
      
      if (orderIndex > -1){
        orderDevices[orderIndex].count++;
      }
      
      else{
        
        const chosenDevices = {
          id: menuState.devices[menuIndex].id,
          name: menuState.devices[menuIndex].alt,
          price: menuState.devices[menuIndex].price,
          count: 1
        };
        orderDevices.push(chosenDevices);
      }
  
     
      const newPrice = orderState.totalPrice + menuState.devices[menuIndex].price;
  
      
      setOrderState({
        totalPrice: newPrice,
        chosenDevices: orderDevices
      });
    }
            

    const removeDevicesHandler = (id) => {
       
        const index = orderDevices.findIndex(devices => devices.id === id);
    
        
        let price = orderState.totalPrice; 
    
        
        if(index >= 0){
          price = price - orderDevices[index].price;
          orderDevices[index].count--;
    
          
          if(orderDevices[index].count < 1){
            orderDevices.splice(index, 1);
          }
        }
    
        
        setOrderState({
          totalPrice: price,
          chosenDevices: orderDevices
        });
      }      
            
            let checkoutDisabled = true;

            if (orderState.chosenDevices.length > 0){
              checkoutDisabled = false;
            }


            const checkoutHandler = () => {
                axios.post('/orders.json', orderState)
                .then(response => {
                    alert('Order saved!');
                    console.log(response);
                })
                .catch(error => {
                    setMenuState({devices: menuState.devices, error: true});
                    alert('Something went wrong :(');
                    console.log(error);
                    });
            }

            let smarthomeMenu = menuState.error ? <Message><p>Pizza Pal menu can't be loaded!</p></Message> : <Message><p>Menu loading...</p></Message>;
  
    if (menuState.devices.length > 0) {
      smarthomeMenu = (
          <Grid divided='vertically' stackable>
          <Grid.Row centered>
              <Menu menu={menuState.devices} />
          </Grid.Row>
          <Order 
            menu={menuState.devices}
            devicesAdded={addDevicesHandler}
            devicesRemoved={removeDevicesHandler}
            chosenDevices={orderState.chosenDevices}
            totalPrice={orderState.totalPrice}
            checkout={checkoutHandler}
            disabled={checkoutDisabled}
            
            />
          </Grid>
      );
  }




    return (
      <div>
      {smarthomeMenu}
    </div>
  )
};

export default SmartHome;