import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContainerComponent from '../components/ContainerComponent';
import SongListItemComponent from '../components/SongListItemComponent'
import { GetSpotifyInfo } from '../components/HOCS/GetSpotifyInfoHoc';

interface Props {
    getPlaylistSongs(playlistId: string): any,
    location: {
        state: {
            id: string
        }
    }
}

interface State {
    id: string,
    songs: {
        items?: [{
            track?: {
                id: string
                name?: string
                artists?: [{
                    name?: string
                }],
                album?: {
                    images?: [
                        { url?: string }, // 640px
                        { url?: string }, // 300px
                        { url?: string }  // 64px
                    ]
                    release_date?: string
                }
            }
        }]
    }
}

class SelectSongScreen extends Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            id: "",
            songs: {}
        };
    }

    componentDidMount() {
        this.setState({ id: this.props.location.state.id })

        this.props.getPlaylistSongs(this.props.location.state.id)
            .then((res: object) => {
                this.setState({ songs: res })
            });
    }

    makeSongList() {
        if (this.state.songs.items) {
            const songList = this.state.songs.items.map((item, i) => {

                return (
                    <ListGroup.Item key={i}>
                        <Link to={{
                                pathname: '/answers',
                                state: {
                                    id: item.track!.id
                                }
                            }}>
                            <SongListItemComponent
                                songtitle={item!.track!.name!}
                                // TODO: Get all artists
                                artist={item!.track!.artists![0].name!}
                                year={item!.track!.album!.release_date!.slice(0, 4)}
                                image_url={item!.track!.album!.images![1].url!} />
                        </Link>
                    </ListGroup.Item>
                );
            });
            return songList;
        }
        return null;
    }

    render() {
        return (
            <ContainerComponent>
                <Card.Body>
                    <Card.Title className="text-center">Select a song</Card.Title>
                    <ListGroup variant="flush">
                        {this.makeSongList()}
                    </ListGroup>
                </Card.Body>
            </ContainerComponent>
        )
    }
}

export default GetSpotifyInfo(SelectSongScreen);