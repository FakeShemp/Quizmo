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
    answer: string,
    question: string
}

class InputQuestionScreen extends Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            answer: "",
            question: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        // TODO: Implement real checking
        if (this.props.location.state.answer) {
            this.setState({ answer: this.props.location.state.answer });
        }
    }

    handleChange(event: any) {
        this.setState({ question: event.target.value });
    }

    handleSubmit(event: any) {
        // TODO: Handle more than one quiz
        let quizzes = [{
            quiz_name: "Master Quiz",
            questions: new Array()
        }];
        
        let saved_quizzes = localStorage.getItem("quizzes");

        if (saved_quizzes) {
            quizzes = JSON.parse(saved_quizzes);
        }

        quizzes[0].questions.push(
            {
                question: this.state.question,
                answer: this.state.answer
            }
        )

        localStorage.setItem("quizzes", JSON.stringify(quizzes));
        event.preventDefault();
    }

    render() {
        return (
            <Card>
                <Card.Body className="text-center">
                    <Card.Subtitle>Your Answer</Card.Subtitle>
                    <Card.Title>🌟 {this.state.answer} 🌟</Card.Title>
                    <hr />
                    <Form className="text-left" onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Enter your question!</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your question"
                                value={this.state.question}
                                onChange={this.handleChange} />
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