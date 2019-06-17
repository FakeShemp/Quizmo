import React, { Fragment, Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContainerComponent from '../components/ContainerComponent';
import SongListItemComponent from '../components/SongListItemComponent';
import { GetSpotifyInfo } from '../components/HOCS/GetSpotifyInfoHoc';
import { SpinnerComponent } from '../components/SpinnerComponent'
import './SelectSongScreen.css';

interface Props extends RouteComponentProps<any> {
    getSongs: any,
}

interface State {
    playlistName: string,
    success: boolean,
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

//renders the selectsongscreen takes the url and takes the id to fetch songs form spotify.
class SelectSongScreen extends Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            playlistName: "",
            success: false,
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
                this.setState({ tracks: list, success: true })
            });

        if (this.props.location.state.playlistName) {
            this.setState({ playlistName: this.props.location.state.playlistName });
        }
    }

    composeSongs = () => {
        const playlistName = this.state.playlistName;

        if (this.state.tracks) {
            const songItems = this.state.tracks.map((item, i) => {
                return (
                    <ListGroup.Item className="SongItem" key={i}>
                        <Link
                            key={i}
                            to={{
                                pathname: `/answers/id=${item.track.id}/${localStorage.getItem('token')}/`,
                                state: {
                                    playlistName: playlistName
                                }
                            }}
                        >
                            <SongListItemComponent
                                image={item.track.album.images ? item.track.album.images[1].url : ""}
                                name={item.track.name}
                                artist={item.track.artists[0].name}
                                year={item.track.album.release_date.slice(0, 4)} />
                        </Link>
                    </ListGroup.Item >
                )
            });
            return songItems;
        }
    }

    render() {
        return (
            <Fragment>
                {this.state.success ?
                    <ContainerComponent>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="listGroup">
                                <Card className="border-0">
                                    <Card.Body className="text-center">
                                        <Card.Title>Select a song</Card.Title>
                                    </Card.Body>
                                </Card>
                            </ListGroup.Item>
                            {this.state.success && <Fragment>{this.composeSongs()}</Fragment>}
                        </ListGroup>
                    </ContainerComponent> : <SpinnerComponent />
                }
            </Fragment>
        )
    }
}

export default GetSpotifyInfo(SelectSongScreen);