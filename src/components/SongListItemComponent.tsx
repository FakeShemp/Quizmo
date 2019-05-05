import React, { Component } from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import './SongListItemComponent.css'

interface Props {
    songtitle: string,
    artist: string,
    year: string,
    image_url: string
}

class SongListItemComponent extends Component<Props> {
    render() {
        const songTitle = this.props.songtitle;
        const artist = this.props.artist;
        const year = this.props.year;
        let image_url = "http://placekitten.com/150/150";

        if (this.props.image_url) {
            image_url = this.props.image_url;
        }

        return (
            <Card>
                <Row>
                    <Col xs={3}>
                        <Image
                            className="SongIcon"
                            src={image_url}
                            alt="Song image"
                        />
                    </Col>
                    <Col className="my-auto">
                        <h5>{songTitle}</h5>
                        <h6>{artist} ({year})</h6>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default SongListItemComponent;