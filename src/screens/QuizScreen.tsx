import React, { Component } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContainerComponent from '../components/ContainerComponent';

class QuizScreen extends Component {
    composeQuestions(questions: {question: string, answer: string}[]): JSX.Element[] {
        let r: JSX.Element[] = [];

        questions.forEach((e, index) => {
            r.push(
                <Card key={index}>
                    <Card.Body>
                        <Card.Text>{e.question}</Card.Text>
                        <Card.Title>{e.answer}</Card.Title>
                    </Card.Body>
                </Card>
            )
        });

        return r;
    }

    render() {
        const quizTitle = "Quiz Title"
        const questions = [
            {
                question: "På vilket MJ-album finns låten \"Thriller\"?",
                answer: "Thriller"
            },
            {
                question: "Vilken musikal är låten \"Somewhere\" från?",
                answer: "West Side Story"
            }
        ]

        const renderedQuestions = this.composeQuestions(questions);

        return (
            <ContainerComponent>
                <Card.Body>
                    <Card.Title>{quizTitle}</Card.Title>
                    {renderedQuestions}
                </Card.Body>
            </ContainerComponent>
        )
    }
}

export default QuizScreen;