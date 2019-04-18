import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap'

class LoginScreen extends Component {

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title><h1>Quizmo</h1></Card.Title>
                    <Button variant="success">Log in with Spotify</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default LoginScreen;