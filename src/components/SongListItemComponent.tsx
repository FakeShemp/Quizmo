import React, { Component } from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './SongListItemComponent.css';
import {GetSpotifyInfo} from '../components/HOCS/GetSpotifyInfoHoc';

interface State {
    tracks:[{track:{artists:{[name:string]:any},name?:string},id?:any}?]
}

interface Props {
getSongs:any,
}


class SongListItemComponent extends Component<Props,State> {
    constructor(props:any) {
        super(props);
        this.state = {
            tracks: []
        }
    }


    componentDidMount() {   

        //split up the id frpm the url.
        let tracksId = document.URL;
       let tracksIDSplit = tracksId.split("/");
        let finalTracksID = tracksIDSplit[4].substring(3)

     this.props.getSongs(finalTracksID)
     .then((list:any) => {
        this.setState({tracks : list})});
        
    }       
     

    render() {
      const rendSongs = () => {
         const songList = this.state.tracks.map((item:any,i:number) => {

            return <Link  key={i} to={`/answers/id=${item.track.id}/${localStorage.getItem('token')}/`}><Col xs={7} className="my-auto"> <Image width={40} src={`${item.track.album.images[0].url}`}
            /> {item.track.artists[0].name} {item.track.name}
            </Col></Link>
           })
           return songList;
       } 
        return (
            <Card>
                <Row>
                      {rendSongs()}
                </Row>
            </Card>
        )
    }
}

export default GetSpotifyInfo(SongListItemComponent);