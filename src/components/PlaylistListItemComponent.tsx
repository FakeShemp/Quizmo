/**
 * This is a component which displays a single summary of
 * a playlist so the user can identify it easily.
 */

import React, { Component, Fragment } from 'react';
import { GetSpotifyInfo } from '../components/HOCS/GetSpotifyInfoHoc';
import { Card, Row, Col, Image } from 'react-bootstrap';
import './PlaylistListItemComponent.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

interface Props {
    getPlayLists: any,
    runIt:any
}

interface State {
    playLists: {
        items?: [{
            name?:any,
            images?:any,
            href?:any,
            id?:any
        }]
 }
}

declare const Play: [];


class PlaylistListItemComponent extends Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            playLists: {}
        }
        
    }


    componentDidMount() {
        this.props.getPlayLists()
            .then((res: object) => {
                this.setState({ playLists: res })
            });

    }

    image:any;
   
    render() {

        //when playlists is fetched this runs
        const playlistList = () => {
            if (this.state.playLists.items) {

           const PlayListItem = this.state.playLists.items.map((item,i) =>{
            //this is kinda funky but it works.
            if (item.images[0]) {
            const hey = item.images[0];
            this.image = hey.url;
            }

          return <Link key={i} to={`/songs/id=${item.id}/${localStorage.getItem('token')}`}> <Col xs={10}> <Image className="PlaylistIcon"
          src={this.image} /> {item.name}</Col></Link>
                });
           return PlayListItem;
            }

        }


        return (
            <Card>
                <Row>
                        {playlistList()}
                </Row>
            </Card>
        )
    }
}




export default GetSpotifyInfo(PlaylistListItemComponent);