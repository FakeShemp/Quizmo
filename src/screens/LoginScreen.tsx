/**
 * This is the screen from which the user logs in.
 */

import React, { Component } from 'react';
import ContainerComponent from '../components/ContainerComponent';
import LoginComponent from '../components/LoginComponent';


class LoginScreen extends Component {
   

   public render() {
          return (
            <ContainerComponent>
                <LoginComponent></LoginComponent>
            </ContainerComponent>
        )
    }
}

export default LoginScreen;