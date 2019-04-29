import React, { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import './InputQuestionScreen.css';

class InputQuestionScreen extends Component {
    render() {
        const Answer = "Thriller";

        return (
            <Card>
                <Card.Body className="text-center">
                    <Card.Subtitle>Your Answer</Card.Subtitle>
                    <Card.Title>🌟 {Answer} 🌟</Card.Title>
                    <hr/>
                    <Form className="text-left">
                        <Form.Group>
                            <Form.Label>Enter your question!</Form.Label>
                            <Form.Control type="text" placeholder="Your question" />
                        </Form.Group>
                        <div className="text-center">
                            <Button className="SubmitButton" variant="primary" type="submit">Submit</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}

export default InputQuestionScreen;