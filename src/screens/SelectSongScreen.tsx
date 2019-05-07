import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContainerComponent from '../components/ContainerComponent';
import SongListItemComponent from '../components/SongListItemComponent';
import { GetSpotifyInfo } from '../components/HOCS/GetSpotifyInfoHoc';
import './SelectSongScreen.css';

interface Props {
    getSongs: any,
}

interface State {
    tracks: [{
        track: {
            album: {
                release_date: string,
                images: [
                    { url: string }, // 640px
                    { url: string }, // 300px
                    { url: string }  //  64px
                ]
            },
            artists: [{
                name: string
            }],
            name: string,
            id: string
        }
    }]
}

class SelectSongScreen extends Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            tracks: [{
                track: {
                    album: {
                        release_date: "",
                        images: [
                            { url: "" },
                            { url: "" },
                            { url: "" }]
                    },
                    artists: [{
                        name: ""
                    }],
                    name: "",
                    id: ""
                }
            }]
        }
    }

    componentDidMount() {
        // Split up the ID from the url.
        let tracksId = document.URL;
        let tracksIDSplit = tracksId.split("/");
        let finalTracksID = tracksIDSplit[4].substring(3)

        this.props.getSongs(finalTracksID)
            .then((list: any) => {
                this.setState({ tracks: list })
            });
    }

    composeSongs = () => {
        if (this.state.tracks) {
            const songItems = this.state.tracks.map((item, i) => {
                return (
                    <ListGroup.Item className="SongItem" key={i}>
                        <Link
                            key={i}
                            to={`/answers/id=${item.track.id}/${localStorage.getItem('token')}/`}>
                            <SongListItemComponent
                                image={item.track.album.images ? item.track.album.images[1].url : ""}
                                name={item.track.name}
                                artist={item.track.artists[0].name}
                                year={item.track.album.release_date.slice(0, 4)} />
                        </Link>
                    </ListGroup.Item>
                )
            });
            return songItems;
        }
        return undefined;
    }

    render() {
        return (
            <ContainerComponent>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Card className="border-0">
                            <Card.Body className="text-center">
                                <Card.Title>Select a song</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                        {this.composeSongs()}
                </ListGroup>
            </ContainerComponent>
        )
    }
}

export default GetSpotifyInfo(SelectSongScreen);