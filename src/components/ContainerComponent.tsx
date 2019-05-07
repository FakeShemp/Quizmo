/**
 * This is the component which wraps around most other screens.
 * Its main function is to keep everything a consistent style.
 */

import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';
import './ContainerComponent.css'

class ContainerComponent extends Component {
    render() {
        const children = this.props.children;

        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Container>
                    <Card>
                        <Card.Body className="Container">
                            {children}
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default ContainerComponent;