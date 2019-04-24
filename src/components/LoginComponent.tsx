/**
 * This is the login component. 
 * It should handle all login/logout functionality.
 */

import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class LoginComponent extends Component {
    render() {
        return (
            <Card.Body>
                <Card.Title><h1>Quizmo</h1></Card.Title>
                <Button variant="success">Log in with Spotify</Button>
            </Card.Body>
        );
    }
}

export default LoginComponent;