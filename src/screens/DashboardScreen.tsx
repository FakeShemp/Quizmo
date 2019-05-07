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

class DashboardScreen extends Component {
    render() {
        return (
            <ContainerComponent>
                <UserComponent />
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Link to={`/playlists/${localStorage.getItem('token')}`}>
                            <NewQuizComponent />
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {/* Routing not implemented below */}
                        <Link to="/quiz">
                            <QuizListItemComponent />
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Link to="/quiz">
                            <QuizListItemComponent />
                        </Link>
                    </ListGroup.Item>
                </ListGroup>
            </ContainerComponent >
        )
    }
}

export default DashboardScreen;