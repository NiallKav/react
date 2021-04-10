import React from "react";
import { Menu } from 'semantic-ui-react';

            const Nav = (props) => {
                return (
                <Menu color='green' stackable inverted>
                    <Menu.Item>
                        <img src='images/logo.png' alt='Smart Home App Logo' />
                    </Menu.Item>

                    <Menu.Item active>
                        Smart Home App
                    </Menu.Item>

                    <Menu.Item>
                        Your Orders
                    </Menu.Item>

                </Menu>
                )
                };

            
export default Nav;