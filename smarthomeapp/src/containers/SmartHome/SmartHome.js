import React, {useState} from 'react';
import Menu from '../../components/Menu/Menu';
import { Grid } from 'semantic-ui-react';
import Order from '../../components/Order/Order';


const SmartHome = (props) => {

    const [menuState, setMenuState] = useState({
        devices: [
          { id: 0, name: 'lightbulb_one', price: .75, image: 'images/devices/light_bulb_one.jpg', alt: 'Light Bulb ' },
          { id: 1, name: 'lightbulb_two', price: .75, image: 'images/devices/light_bulb_two.jpg', alt: 'Light Bulb' },
          { id: 2, name: 'lightbulb_three', price: .5, image: 'images/devices/light_bulb_three.jpg', alt: 'Light Bulb' },
          { id: 3, name: 'lightbulb_four', price: .5, image: 'images/devices/light_bulb_four.jpg', alt: 'Light Bulb ' },
          { id: 4, name: 'lightstrip_one', price: .5, image: 'images/devices/light_strip_one.jpg', alt: 'Light Strip' },
          { id: 5, name: 'lightstrip_two', price: .5, image: 'images/devices/light_strip_two.jpg', alt: 'Light Strip' },
          { id: 6, name: 'wifi_socket', price: .5, image: 'images/devices/wifi_socket.jpg', alt: 'WIFI Socket' },
          { id: 7, name: 'motion_sensor', price: .5, image: 'images/devices/motion_sensor.jpg', alt: 'Motion Sensor' },
          { id: 8, name: 'security_camera', price: .5, image: 'images/devices/security_camera.jpg', alt: 'Security Camera ' },
          { id: 9, name: 'smart_timer', price: .5, image: 'images/devices/smart_timer.jpg', alt: 'Smart Timer' },
          { id: 10, name: 'smart_switch_controller', price: .5, image: 'images/devices/smart_switch_controller.jpg', alt: 'Smart Switch Controller' },
          { id: 11, name: 'spot_light', price: 1, image: 'images/devices/spot_light.jpg', alt: 'Spot Light' },
          { id: 12, name: 'tape_light', price: 1, image: 'images/devices/tape_light.jpg', alt: 'Tape Light' },
          { id: 13, name: 'down_light', price: 1, image: 'images/devices/down_light.jpg', alt: 'Down Light' },
          { id: 14, name: 'carbon_monoxide_alarm', price: .75, image: 'images/devices/carbon_monoxide_alarm.jpg', alt: 'Carbon Monoxide Alarm' },
          { id: 15, name: 'google_home_hub', price: .75, image: 'images/devices/google_home_hub.jpg', alt: 'Google Home Hub' },
        ]
      });

      return (
        <Grid divided='vertically' stackable>
            <Grid.Row centered>
                <Menu menu={menuState.devices} />
            </Grid.Row>
    
            <Order menu={menuState.devices}/>
    
      </Grid>
      )
    };
    

export default SmartHome;