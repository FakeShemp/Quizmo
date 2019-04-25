import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class HamburgerComponent extends Component {
    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/dashboard">Quizmo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Log In</Nav.Link>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/playlists">Playlists</Nav.Link>
                        <Nav.Link href="/Songs">Songs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default HamburgerComponent;