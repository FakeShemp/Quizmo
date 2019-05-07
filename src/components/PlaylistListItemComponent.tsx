/**
 * This is a component which displays a single summary of
 * a playlist so the user can identify it easily.
 */

import React, { Component, Fragment } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './PlaylistListItemComponent.css'

interface Props {
    image: string,
    name: string
}

class PlaylistListItemComponent extends Component<Props> {
    render() {
        return (
            <Row>
                <Col xs={4}>
                    <Image src={this.props.image} fluid />
                </Col>
                <Col xs={8} className="my-auto">
                    <h5>{this.props.name}</h5>
                </Col>
            </Row>
        )
    }
}

export default PlaylistListItemComponent;