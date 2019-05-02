import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContainerComponent from '../components/ContainerComponent';
import PlaylistListItemComponent from '../components/PlaylistListItemComponent'

class SelectPlaylistScreen extends Component {
    render() {
        return (
            <ContainerComponent>
                <Card.Body className="text-center">
                    <Card.Title>These are your playlists 😀</Card.Title>
                    <Card.Subtitle>Lets make a quiz from one</Card.Subtitle>
                    <br />
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Link to="/songs">
                                <PlaylistListItemComponent />
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to="/songs">
                                <PlaylistListItemComponent />
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </ContainerComponent>
        )
    }
}

export default SelectPlaylistScreen;