/**
 * This is the login component. 
 * It should handle all login/logout functionality.
 */

import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class LoginComponent extends Component {

login = () => {
window.location.assign("http://localhost:8888")
 }

 hello = setTimeout(this.login,3000);

    render() {



        return (
            <Card.Body>
                <Card.Title><h1>Welcome to Quizmo</h1></Card.Title>
                <h2>you will be redirected shortly</h2>
            </Card.Body>
        );
    }
}

export default LoginComponent;