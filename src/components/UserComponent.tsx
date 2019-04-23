/**
 * This component renders a user card to display the currently 
 * logged-in user's info.
 */

import React, { Component, Fragment } from 'react';
import { Card } from 'react-bootstrap';

class UserComponent extends Component {
    render() {
        const username = "Username";

        return (
            <Fragment>
                <Card.Img variant="top" src="http://placekitten.com/250/200" />
                <Card.Body>
                    <Card.Title>Hello {username}</Card.Title>
                </Card.Body>
            </Fragment>
        )
    }
}

export default UserComponent;