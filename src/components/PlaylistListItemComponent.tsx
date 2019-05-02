/**
 * This is a component which displays a single summary of
 * a playlist so the user can identify it easily.
 */

import React, { Component, Fragment } from 'react';
import { GetSpotifyInfo } from '../components/HOCS/GetSpotifyInfoHoc';
import { Card, Row, Col, Image } from 'react-bootstrap';
import './PlaylistListItemComponent.css'

interface Props {
    getPlayLists: any,
    playlistname: string
}

interface State {
    playLists: {
        items?: [{name?:any,images?:any}]
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
        // this.props.runIt();
        this.props.getPlayLists()
            .then((res: object) => {
                console.log(res)
                this.setState({ playLists: res })
            });

    }

    hey2:any;
   
    render() {

        //when playlists is fetched this runs
        const playListList = () => {
            if (this.state.playLists.items) {

            

           const PlayListItem = this.state.playLists.items.map((item,i) =>{
            //this is kinda funky but it works.
            if (item.images[0]) {
            const hey = item.images[0];
            this.hey2 = hey.url;
            console.log(this.hey2)
            }

          return  <Col xs={10} key={i}> <Image className="PlaylistIcon"
          src={this.hey2} /> {item.name}</Col>
                });
           return PlayListItem;
            }

        }

        const PlaylistName = this.props.playlistname;

        return (
            <Card>
                <Row>
                        {playListList()}
                </Row>
            </Card>
        )
    }
}




export default GetSpotifyInfo(PlaylistListItemComponent);