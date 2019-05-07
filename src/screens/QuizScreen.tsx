import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import ContainerComponent from '../components/ContainerComponent';

interface Props {
    location: {
        state: {
            quiz_name: string
            questions: [
                {
                    question: string,
                    answer: string
                }
            ]
        }
    }
}

class QuizScreen extends Component<Props> {
    composeQuestions(questions: { question: string, answer: string }[]): JSX.Element[] {
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
        const quizTitle = this.props.location.state.quiz_name;
        const questions = this.props.location.state.questions;

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