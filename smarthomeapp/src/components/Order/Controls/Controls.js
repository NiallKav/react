import React from "react";
import { Grid, Header } from 'semantic-ui-react';
import Control from './Control/Control';

const Controls = (props) => {
  return (
    <Grid.Column width={8}>
        <Header as='h2' textAlign='center' className='step'>
            Step 1: Choose your Smart Home Device
        </Header>
        <Grid>
            {props.menu.map((devices, index) => {
            return <Control 
                key={devices.id}
                alt={devices.alt}
            />
            })}
        </Grid>
    </Grid.Column>
  )
};

export default Controls;