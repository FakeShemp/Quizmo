import React, { Component } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import ContainerComponent from '../components/ContainerComponent';
import './SelectAnswerScreen.css'

class SelectAnswerScreen extends Component {
    render() {
        const Artist = "Michael Jackson";
        const SongTitle = "Thriller";
        const AlbumTitle = "Thriller";
        const AlbumYear = "1982";

        return (
            <ContainerComponent>
                <Card.Body>
                    <Card.Title className="text-center">Select question answer</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="AnswerButton">
                            <Button className="AnswerButton">
                                <h6>Artist</h6>
                                <h4>{Artist}</h4>
                            </Button>
                        </ListGroup.Item>
                        <ListGroup.Item className="AnswerButton">
                            <Button className="AnswerButton">
                                <h6>Song Title</h6>
                                <h4>{SongTitle}</h4>
                            </Button>
                        </ListGroup.Item>
                        <ListGroup.Item className="AnswerButton">
                            <Button className="AnswerButton">
                                <h6>Album Title</h6>
                                <h4>{AlbumTitle}</h4>
                            </Button>
                        </ListGroup.Item>
                        <ListGroup.Item className="AnswerButton">
                            <Button className="AnswerButton">
                                <h6>Release Year</h6>
                                <h4>{AlbumYear}</h4>
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </ContainerComponent>
        )
    }
}

export default SelectAnswerScreen;