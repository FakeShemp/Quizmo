import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ContainerComponent from '../components/ContainerComponent';
import SongListItemComponent from '../components/SongListItemComponent'

class SelectSongScreen extends Component {
    render() {
        return (
            <ContainerComponent>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <SongListItemComponent></SongListItemComponent>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <SongListItemComponent></SongListItemComponent>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </ContainerComponent>
        )
    }
}

export default SelectSongScreen;