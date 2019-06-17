import React, { Component, Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContainerComponent from '../components/ContainerComponent';
import { GetSpotifyInfo } from '../components/HOCS/GetSpotifyInfoHoc';
import { SpinnerComponent } from '../components/SpinnerComponent';
import CustomMediaComponent from '../components/AudioPlayerComponent'
import './SelectAnswerScreen.css'

interface Props extends RouteComponentProps<any> {
    getSong: any
}

interface State {
    playlistName: string,
    id: string,
    success: boolean,
    track: {
        id: string,
        name: string,
        artists: [{
            name: string
        }],
        album: {
            images: [
                { url: string }, // 640px
                { url: string }, // 300px
                { url: string }  //  64px
            ],
            release_date: string,
            name: string
        },
        preview_url: string
    }
}

class SelectAnswerScreen extends Component<Props, State>{
    constructor(props: any) {
        super(props);
        this.state = {
            playlistName: "",
            success: false,
            id: "",
            track: {
                id: "",
                name: "",
                artists: [{
                    name: ""
                }],
                album: {
                    images: [
                        { url: "" },
                        { url: "" },
                        { url: "" }
                    ],
                    release_date: "",
                    name: ""
                },
                preview_url: ""
            }
        }
    }

    componentDidMount() {
        let trackId = document.URL;
        let trackIDSplit = trackId.split("/")
        let finalTrackID = trackIDSplit[4].substring(3)

        this.props.getSong(finalTrackID)
            .then((res: any) => {
                this.setState({ track: res, success: true })
            });

        if (this.props.location.state.playlistName) {
            this.setState({ playlistName: this.props.location.state.playlistName });
        }
    }

    render() {
        const artist = this.state.track.artists[0].name;
        const playlistName = this.state.playlistName;
        const songTitle = this.state.track.name;
        const albumTitle = this.state.track.album.name;
        const albumYear = this.state.track.album.release_date.slice(0, 4);

        return (
            <Fragment>
                {this.state.success &&
                    <ContainerComponent>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Select question answer</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="player listItem" >
                                        <p className="playerText">Preview Song</p>
                                        <CustomMediaComponent songPreview={this.state.track.preview_url}>
                                        </CustomMediaComponent>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="listItem">
                                        <Link to={{
                                            pathname: "/questionform",
                                            state: {
                                                answer: artist,
                                                playlistName: playlistName
                                            }
                                        }} >
                                            <Button className="AnswerButton">
                                                <h6>Artist</h6>
                                                <h4>{artist}</h4>
                                            </Button>
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="listItem">
                                        <Link to={{
                                            pathname: "/questionform",
                                            state: {
                                                answer: songTitle,
                                                playlistName: playlistName
                                            }
                                        }} >
                                            <Button className="AnswerButton">
                                                <h6>Song Title</h6>
                                                <h4>{songTitle}</h4>
                                            </Button>
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="listItem">
                                        <Link to={{
                                            pathname: "/questionform",
                                            state: {
                                                answer: albumTitle,
                                                playlistName: playlistName
                                            }
                                        }} >
                                            <Button className="AnswerButton">
                                                <h6>Album Title</h6>
                                                <h4>{albumTitle}</h4>
                                            </Button>
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="listItem">
                                        <Link to={{
                                            pathname: "/questionform",
                                            state: {
                                                answer: albumYear,
                                                playlistName: playlistName
                                            }
                                        }} >
                                            <Button className="AnswerButton">
                                                <h6>Release Year</h6>
                                                <h4>{albumYear}</h4>
                                            </Button>
                                        </Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </ContainerComponent>
                }
                {!this.state.success && <SpinnerComponent />}
            </Fragment>
        )
    }
}

export default GetSpotifyInfo(SelectAnswerScreen);