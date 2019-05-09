import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './SongListItemComponent.css';

interface Props {
    image: string,
    name: string,
    artist: string,
    year: string
}

class SongListItemComponent extends Component<Props> {
    render() {
        return (
            <Row>
                <Col xs={4}>
                    <Image src={this.props.image} fluid />
                </Col>
                <Col xs={8} className="my-auto">
                    <h5>{(this.props.name.length < 18) ? this.props.name : (this.props.name.slice(0,15) + '…')}</h5>
                    <h6>{this.props.artist} ({this.props.year})</h6>
                </Col>
                
            </Row>
        )
    }
}

export default SongListItemComponent;