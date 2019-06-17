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
import { Card } from 'react-bootstrap';
import { GetBackendInfo } from '../components/HOCS/GetBackendInfoHoc';
import { GetSpotifyInfo } from '../components/HOCS/GetSpotifyInfoHoc';
import './DashboardScreen.css';
import { RouteComponentProps } from 'react-router-dom';

interface State {
    userId: string,
    quizzes: any[],
    deleted: any
}

interface Props extends RouteComponentProps<any> {
    getUser: any,
    backend: {
        getUser: any,
        getUserBySpotifyId: any,
        getQuizzes: any,
        deleteQuiz: any
    }
}

// Renders the dahsboardscreen and shows the quizzes that are avalible and gives the option to manke a new quiz
class DashboardScreen extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            userId: '',
            quizzes: new Array(),
            deleted: ''
        }
    }

    componentDidMount() {
        this.props.getUser()
            .then((res: any) => {
                this.props.backend.getUserBySpotifyId(res.id)
                    .then((res: any) => {
                        this.setState({
                            userId: res._id
                        })
                    })
            });
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
         if (this.state.userId !== prevState.userId) {
            this.props.backend.getQuizzes(this.state.userId)
                .then((res: any) => {
                    this.setState({
                        quizzes: this.state.quizzes.concat(res)
                    })
                })
        }
    }
    
    /*
    
    */

    delQuiz = (id: string) => {
        this.props.backend.deleteQuiz(id)
        
           
    }

    getQuizzes = () => {
        let renderedQuizzes: any[] = [];

        if (this.state.quizzes.length != 0) {
            this.state.quizzes.forEach((element: any, index: number) => {
                renderedQuizzes.push(
                    <ListGroup.Item key={index} className="btnContainer">
                        <button onClick={() => this.delQuiz(element._id)}>delete</button>
                        <Link to={{
                            pathname: "/quiz",
                            state: {
                                quiz_name: element.name,
                                questions: element.questions
                            }
                        }}>
                            <QuizListItemComponent
                                quiz_name={element.name}
                            />
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
                <Card.Body className="color-secondary">
                    <UserComponent />
                    <ListGroup>
                        <ListGroup.Item className="btnContainer">
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

export default GetBackendInfo(GetSpotifyInfo(DashboardScreen));