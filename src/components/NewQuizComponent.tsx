import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './NewQuizComponent.css'

class NewQuizComponent extends Component {
    render() {
        return (
            <Card className="NewQuizButton">
                <Card.ImgOverlay className="my-auto mx-auto text-center newQuizBtn">
                    <Card.Title>New Quiz</Card.Title>
                </Card.ImgOverlay>
            </Card>
        )
    }
}

export default NewQuizComponent;