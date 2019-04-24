/**
 * This is the splash-page to which the user is directed to once logged in.
 */

import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import ContainerComponent from '../components/ContainerComponent';
import PlaylistListItemComponent from '../components/PlaylistListItemComponent';
import UserComponent from '../components/UserComponent';
import NewQuizComponent from '../components/NewQuizComponent';

class DashboardScreen extends Component {
    render() {
        return (
            <ContainerComponent>
                <Card.Body style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <Card style={{ width: "35%", height: "100%" }}>
                        <UserComponent></UserComponent>
                    </Card>
                    <Card style={{ width: "60%", height: "100%" }}>
                        <NewQuizComponent></NewQuizComponent>
                        <PlaylistListItemComponent></PlaylistListItemComponent>
                        <PlaylistListItemComponent></PlaylistListItemComponent>
                        <PlaylistListItemComponent></PlaylistListItemComponent>
                        <PlaylistListItemComponent></PlaylistListItemComponent>
                    </Card>
                </Card.Body>
            </ContainerComponent>
        )
    }
}

export default DashboardScreen;