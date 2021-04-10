import React from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';
import MenuItem from './MenuItem/MenuItem';

        const Menu = (props) => {
        return (

            <Grid.Column width={12}>

                <Segment color='red'>
                    <Header as='h2' textAlign='center' color='red'>
                        Smart Home Devices
                    </Header>
                </Segment>

                <Grid>
                    {props.menu.map((devices, index) => {
                    return <MenuItem 
                        key={devices.id}
                        image={devices.image}
                        alt={devices.alt}
                        price={devices.price}
                    />
                    })}
                </Grid>

            </Grid.Column>
        );
        }

export default Menu;