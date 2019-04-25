import React, { Component } from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import './SongListItemComponent.css'

class SongListItemComponent extends Component {
    render() {
        const SongTitle = "Song";
        const Artist = "Artist";
        const Year = "Year";

        return (
            <Card>
                <Row>
                    <Col xs={3}>
                        <Image
                            className="SongIcon"
                            src="http://placekitten.com/150/150"
                            alt="Song image"
                        />
                    </Col>
                    <Col className="my-auto">
                        <h5>{SongTitle}</h5>
                        <h6>{Artist} ({Year})</h6>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default SongListItemComponent;