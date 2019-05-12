import React, { Component, Fragment } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContainerComponent from '../components/ContainerComponent';
import { GetSpotifyInfo } from '../components/HOCS/GetSpotifyInfoHoc';
import {SpinnerComponent} from '../components/SpinnerComponent';
import './SelectAnswerScreen.css'

interface Props {
    getSong: any
}

interface State {
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
        preview_url:string
    }
}

class SelectAnswerScreen extends Component<Props, State>{
    constructor(props: any) {
        super(props);
        this.state = {
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
                preview_url:""
            }
        }
    }

    componentDidMount() {
        let trackId = document.URL;
        let trackIDSplit = trackId.split("/")
        let finalTrackID = trackIDSplit[4].substring(3)

        this.props.getSong(finalTrackID)
            .then((res: any) => {
                this.setState({ track: res,success: true })
            });
    }

    render() {

        const artist = this.state.track.artists[0].name;
        const songTitle = this.state.track.name;
        const albumTitle = this.state.track.album.name;
        const albumYear = this.state.track.album.release_date.slice(0,4);

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
                        {this.state.track.preview_url ?  <audio controls src={`${this.state.track.preview_url}`}></audio> : <p className="playerText">No preview avalible</p>}
                        </ListGroup.Item>
                            <ListGroup.Item className="listItem">
                                <Link to={{
                                    pathname: "/questionform",
                                    state: {
                                        answer: artist
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
                                        answer: songTitle
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
                                        answer: albumTitle
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
                                        answer: albumYear
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
        {!this.state.success && <SpinnerComponent/>}
        </Fragment>
        
        )
    }
}

export default GetSpotifyInfo(SelectAnswerScreen);