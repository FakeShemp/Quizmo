/**
 * This is a component which displays a single summary of
 * a playlist so the user can identify it easily.
 */

import React, { Component, Fragment } from 'react';
import { Media } from 'react-bootstrap';
import {GetSpotifyInfo} from '../components/HOCS/GetSpotifyInfoHoc';
import { Card, Row, Col, Image } from 'react-bootstrap';
import './PlaylistListItemComponent.css'

interface Props {
    getPlayLists: any,
    playlistname: string
}

interface State {
    playLists: {
        items?: [{name:string}]
    }
}

declare const Play:[];


class PlaylistListItemComponent extends Component <Props,State> {
    constructor(props:any) {
        super(props)
        this.state = {
            playLists: {}
        }
    }

    componentDidMount() {
        // this.props.runIt();
        this.props.getPlayLists()
        .then((res:object) => {
            console.log(res)
            this.setState({playLists: res})
        });

    }
   
    render() {
      
           //when playlists is fetched this runs
       const  playListList = () => {
        if (this.state.playLists.items) {

           const Play = this.state.playLists.items.map((item,i) =>{
          return  <li key={i}> <img width={50}
          height={50}
          className="mr-3"
          src="http://placekitten.com/200/300"/> {item.name}</li>
           });
           return Play;
        }

    }

        const PlaylistName = this.props.playlistname;

        return (
            <Card>
                
                <Row>
                    <Col xs={3}>
                        <Image
                            className="PlaylistIcon"
                            src="http://placekitten.com/150/150"
                            alt="Playlist image"
                        />
                    </Col>
                    <Col className="my-auto">
                        <h5>{PlaylistName}</h5>
                    </Col>
                </Row>
            </Card>
        )
    }
}




export default GetSpotifyInfo(PlaylistListItemComponent);