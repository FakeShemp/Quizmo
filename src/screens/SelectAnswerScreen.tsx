import React, { Component } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContainerComponent from '../components/ContainerComponent';
import './SelectAnswerScreen.css'
import { GetSpotifyInfo } from '../components/HOCS/GetSpotifyInfoHoc';

interface Props {
    // getPlaylistSongs(trackId: string): any,
    location: {
        state: {
            id: string
        }
    }
}

class SelectAnswerScreen extends Component<Props> {
    constructor(props: any) {
        super(props);

        this.state = {
            id: "",
            songInfo: {}
        };
    }

    componentDidMount() {
        this.setState({ id: this.props.location.state.id })

        // this.props.getPlaylistSongs(this.props.location.state.id)
        //     .then((res: object) => {
        //         this.setState({ songs: res })
        //     });
    }
    
    render() {
        const Artist = "Michael Jackson";
        const SongTitle = "Thriller";
        const AlbumTitle = "Thriller";
        const AlbumYear = "1982";

        return (
            <ContainerComponent>
                <Card.Body>
                    <Card.Title className="text-center">Select question answer</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="AnswerButton">
                            <Link to={{
                                pathname: "/questionform",
                                state: {
                                    answer: Artist
                                }
                            }} >
                                <Button className="AnswerButton">
                                    <h6>Artist</h6>
                                    <h4>{Artist}</h4>
                                </Button>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="AnswerButton">
                            <Link to={{
                                pathname: "/questionform",
                                state: {
                                    answer: SongTitle
                                }
                            }} >
                                <Button className="AnswerButton">
                                    <h6>Song Title</h6>
                                    <h4>{SongTitle}</h4>
                                </Button>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="AnswerButton">
                            <Link to={{
                                pathname: "/questionform",
                                state: {
                                    answer: AlbumTitle
                                }
                            }} >
                                <Button className="AnswerButton">
                                    <h6>Album Title</h6>
                                    <h4>{AlbumTitle}</h4>
                                </Button>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="AnswerButton">
                            <Link to={{
                                pathname: "/questionform",
                                state: {
                                    answer: AlbumYear
                                }
                            }} >
                                <Button className="AnswerButton">
                                    <h6>Release Year</h6>
                                    <h4>{AlbumYear}</h4>
                                </Button>
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </ContainerComponent>
        )
    }
}

export default GetSpotifyInfo(SelectAnswerScreen);