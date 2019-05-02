import React, { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import './InputQuestionScreen.css';

interface Props {
    location: {
        state: {
            answer: string
        }
    }
}

interface State {
    answer: string
}

class InputQuestionScreen extends Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = { answer: "" };
    }

    componentDidMount() {

        // TODO: Implement real checking
        if (this.props.location.state.answer) {
            this.setState({ answer: this.props.location.state.answer });
        }
    }

    render() {
        return (
            <Card>
                <Card.Body className="text-center">
                    <Card.Subtitle>Your Answer</Card.Subtitle>
                    <Card.Title>🌟 {this.state.answer} 🌟</Card.Title>
                    <hr />
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