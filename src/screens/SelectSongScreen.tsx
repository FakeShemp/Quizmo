import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContainerComponent from '../components/ContainerComponent';
import SongListItemComponent from '../components/SongListItemComponent'

class SelectSongScreen extends Component {
    render() {
        return (
            <ContainerComponent>
                <Card.Body>
                    <Card.Title className="text-center">Select a song</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Link to="/answers">
                                <SongListItemComponent
                                    songtitle="Thriller"
                                    artist="Michael Jackson"
                                    year="1982" />
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to="/answers">
                                <SongListItemComponent
                                    songtitle="Bad"
                                    artist="Michael Jackson"
                                    year="1987" />
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </ContainerComponent>
        )
    }
}

export default SelectSongScreen;