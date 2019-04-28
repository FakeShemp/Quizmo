/**
 * This is a component which displays a single summary of
 * a playlist so the user can identify it easily.
 */

import React, { Component, Fragment } from 'react';
import { Media } from 'react-bootstrap';
import {GetSpotifyInfo} from '../components/HOCS/GetSpotifyInfoHoc';

interface Props {
    getPlayLists: any,
    // runIt: any
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


        return (
            <Media>
                <Media.Body style={{ justifyContent: "left" }}>
                <ul style={{ listStyleType: "none",justifyContent: "left"}}>
            {playListList()}
            </ul>
                </Media.Body>

            </Media>

        )
    }
}

export default GetSpotifyInfo(PlaylistListItemComponent);