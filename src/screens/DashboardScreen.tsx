/**
 * This is the splash-page to which the user is directed to once logged in.
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ListGroup } from 'react-bootstrap';
import ContainerComponent from '../components/ContainerComponent';
import QuizListItemComponent from '../components/QuizListItemComponent';
import UserComponent from '../components/UserComponent';
import NewQuizComponent from '../components/NewQuizComponent';
import { Button, Card, Form } from 'react-bootstrap';

class DashboardScreen extends Component {
    getQuizzes = () => {
        let saved_quizzes = localStorage.getItem("quizzes");
        let renderedQuizzes: any[] = [];

        if (saved_quizzes) {
            let quizzes = JSON.parse(saved_quizzes);

            quizzes.forEach((element: any, index: number) => {
                renderedQuizzes.push(
                    <ListGroup.Item key={index}>
                        <Link to={{
                                pathname: "/quiz",
                                state: {    
                                    quiz_name: element.quiz_name,
                                    questions: element.questions
                                }
                            }}>
                            <QuizListItemComponent
                                quiz_name={element.quiz_name} />
                        </Link>
                    </ListGroup.Item>
                )
            });
        }

        return renderedQuizzes;
    }

    render() {
        return (
            <ContainerComponent>
                <Card.Body>
                    <UserComponent />
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Link to={`/playlists/${localStorage.getItem('token')}`}>
                                <NewQuizComponent />
                            </Link>
                        </ListGroup.Item>
                        {this.getQuizzes()}
                    </ListGroup>
                </Card.Body>

            </ContainerComponent >
        )
    }
}

export default DashboardScreen;