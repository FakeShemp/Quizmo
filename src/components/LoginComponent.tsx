/**
 * This is the login component. 
 * It should handle all login/logout functionality.
 */

import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class LoginComponent extends Component {

login = () => {
window.location.assign("http://localhost:1337/login")
 }


    render() {

        return (
            <Card.Body>
                <Card.Title><h1>Welcome to Quizmo</h1></Card.Title>
                <button onClick={this.login}>Log in with spotify</button>
            </Card.Body>
        );
    }
}

export default LoginComponent;