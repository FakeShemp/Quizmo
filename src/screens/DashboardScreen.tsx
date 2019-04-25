/**
 * This is the splash-page to which the user is directed to once logged in.
 */

import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ContainerComponent from '../components/ContainerComponent';
import QuizListItemComponent from '../components/QuizListItemComponent';
import UserComponent from '../components/UserComponent';
import NewQuizComponent from '../components/NewQuizComponent';

class DashboardScreen extends Component {
    render() {
        return (
            <ContainerComponent>
                <Card.Body>
                    <UserComponent></UserComponent>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <NewQuizComponent></NewQuizComponent>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <QuizListItemComponent quizname="Mental Metal"></QuizListItemComponent>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <QuizListItemComponent quizname="80's Pop"></QuizListItemComponent>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </ContainerComponent >
        )
    }
}

export default DashboardScreen;