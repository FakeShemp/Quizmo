import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContainerComponent from '../components/ContainerComponent';
import PlaylistListItemComponent from '../components/PlaylistListItemComponent';
import { GetSpotifyInfo } from '../components/HOCS/GetSpotifyInfoHoc';
import './SelectPlaylistScreen.css'

interface Props {
    getPlayLists: any,
}

interface State {
    playlists: {
        items?: [{
            name: any,
            images?: any,
            href: any,
            id: any
        }]
    }
}

class SelectPlaylistScreen extends Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            playlists: {}
        }
    }

    componentDidMount() {
        this.props.getPlayLists()
            .then((res: object) => {
                this.setState({ playlists: res })
            });
    }

    composePlaylists = () => {
        if (this.state.playlists.items) {
            const PlaylistItems = this.state.playlists.items.map((item, i) => {
                return (
                    <ListGroup.Item className="PlaylistItem" key={i}>
                        <Link
                            key={i}
                            to={`/songs/id=${item.id}/${localStorage.getItem('token')}`}>
                            <PlaylistListItemComponent
                                image={item.images ? item.images[1].url : null}
                                name={item.name} />
                        </Link>
                    </ListGroup.Item>
                )
            });
            return PlaylistItems;
        }
        return null;
    }

    render() {
        return (
            <ContainerComponent>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Card className="border-0">
                            <Card.Body className="text-center">
                                <Card.Title>These are your playlists</Card.Title>
                                <Card.Subtitle>Lets make a quiz from one</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    {this.composePlaylists()}
                </ListGroup>
            </ContainerComponent>
        )
    }
}

export default GetSpotifyInfo(SelectPlaylistScreen);