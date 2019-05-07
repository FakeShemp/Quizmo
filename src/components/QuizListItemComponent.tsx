/**
 * This is a component which renders one quiz item for use in a list.
 */

import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './QuizListItemComponent.css';

interface Props {
    quiz_name: string
}

class QuizListItemComponent extends Component<Props> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Card className="QuizItem">
                <Card.Img
                    className="QuizIcon"
                    src="http://placekitten.com/700/150"
                    alt="Card image"
                />
                <Card.ImgOverlay className="my-auto mx-auto text-center">
                    <Card.Title>{this.props.quiz_name}</Card.Title>
                </Card.ImgOverlay>
            </Card>
        )
    }
}

export default QuizListItemComponent;