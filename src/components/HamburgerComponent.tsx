import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

//the token from spotify
declare let path:any;

class HamburgerComponent extends Component {
    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {

        let path = localStorage.getItem('token');

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/dashboard">Quizmo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Log In</Nav.Link>
                        <Nav.Link href={`/dashboard${path}`}>Dashboard</Nav.Link>
                        <Nav.Link href={`/playlists/${path}`}>Playlists</Nav.Link>
                        <Nav.Link href={`/songs/${path}`}>Songs</Nav.Link>
                        <Nav.Link href={`/answears/${path}`}>Answers</Nav.Link>
                        <Nav.Link href={`/questionform/${path}`}>Input Question</Nav.Link>
                        <Nav.Link href="/quiz">Quiz</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default HamburgerComponent;