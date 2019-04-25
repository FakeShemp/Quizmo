/**
 * This component renders a user card to display the currently 
 * logged-in user's info.
 */

import React, { Component, Fragment } from 'react';
import { Card } from 'react-bootstrap';
import './UserComponent.css'

class UserComponent extends Component {
    render() {
        const username = "Username";

        return (
            <Card className="border-0">
                <div className="text-center">
                    <Card.Img className="userIcon" variant="top" src="http://placekitten.com/100/100" />
                </div>
                <Card.Body>
                    <Card.Title className="text-center">Hello {username}!</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}

export default UserComponent;