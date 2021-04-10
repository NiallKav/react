import React, { useState, useEffect } from "react";
import Menu from '../../components/Menu/Menu';
import { Grid } from 'semantic-ui-react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';

const orderDevices = [];

const SmartHome = (props) => {

    const [menuState, setMenuState] = useState({
        
        devices: []

    });

        useEffect(() => {
            axios.get('/devices.json')
            .then(response => {
            setMenuState({devices: response.data});
            console.log(response);
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
        const index = menuState.devices.findIndex(devices => devices.id === id);

        const chosenDevices = {
            id: menuState.devices[index].id,
            name: menuState.devices[index].alt,
            price: menuState.devices[index].price
      }
            orderDevices.push(chosenDevices);

            const newPrice = orderState.totalPrice + menuState.devices[index].price;




            setOrderState({
                totalPrice: newPrice,
                chosenDevices: orderDevices
              });
            }
            

            const removeDevicesHandler = (id) => {
                const index = orderState.chosenDevices.findIndex(devices => devices.id === id);

                let price = orderState.totalPrice; 

                if(index >= 0){

                    price = price - orderState.chosenDevices[index].price;
                    orderDevices.splice(index, 1);

                }

                setOrderState({
                    totalPrice: price,
                    chosenDevices: orderDevices
                });
            }
            
      return (
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
            />
    
      </Grid>
      )
    };
    

export default SmartHome;