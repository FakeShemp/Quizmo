import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';
import { GetBackendInfo } from '../components/HOCS/GetBackendInfoHoc';
import './InputQuestionScreen.css';

interface Props extends RouteComponentProps<any> {
    backend: {
        postQuiz: any
    }
}

interface State {
    answer: string,
    question: string
}

// in this screen the user can input the question to the answear.
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
        if (this.props.location.state) {
            if(this.props.location.state.answer) {
            this.setState({ answer: this.props.location.state.answer });
            }
        }
    }

    handleChange(event: any) {
        this.setState({ question: event.target.value });
    }

    handleSubmit(event: any) {

        
        event.preventDefault();
     
        let question = [{
            question: this.state.question,
            answer: this.state.answer
        }]

        let test2 = localStorage.getItem('user')


        let nameToSend = "test"

        // localStorage.setItem("quizzes", JSON.stringify(quizzes));
        this.props.backend.postQuiz( nameToSend,test2,question)
        .then(()=> {
            this.props.history.push('/dashboard')
        })

      
    }

    render() {
        return (
            <Card>
                <Card.Body className="text-center card-body">
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
                            <Button className="newQuestion" variant="primary" type="button">Add Question</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}

export default GetBackendInfo(InputQuestionScreen);