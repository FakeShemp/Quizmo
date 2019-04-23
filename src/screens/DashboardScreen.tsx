/**
 * This is the splash-page to which the user is directed to once logged in.
 */

import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import ContainerComponent from '../components/ContainerComponent';
import PlaylistIconComponent from '../components/PlaylistIconComponent';
import UserComponent from '../components/UserComponent';

class DashboardScreen extends Component {
    render() {
        return (
            <ContainerComponent>
                <Card.Body style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <Card style={{ width: "35%", height: "100%" }}>
                        <UserComponent></UserComponent>
                    </Card>
                    <Card style={{ width: "60%" }}>
                        <PlaylistIconComponent></PlaylistIconComponent>
                        <PlaylistIconComponent></PlaylistIconComponent>
                        <PlaylistIconComponent></PlaylistIconComponent>
                        <PlaylistIconComponent></PlaylistIconComponent>
                    </Card>
                </Card.Body>
            </ContainerComponent>
        )
    }
}

export default DashboardScreen;