import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
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
                            <SongListItemComponent 
                            songtitle="Thriller" 
                            artist="Michael Jackson" 
                            year="1982" />
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <SongListItemComponent 
                            songtitle="Bad" 
                            artist="Michael Jackson" 
                            year="1987" />
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </ContainerComponent>
        )
    }
}

export default SelectSongScreen;