/**
 * This is the component which wraps around most other screens.
 * Its main function is to keep everything a consistent style.
 */

import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class ContainerComponent extends Component {
    render() {
        const children = this.props.children;

        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Container>
                    {children}
                </Container>
            </div>
        )
    }
}

export default ContainerComponent;