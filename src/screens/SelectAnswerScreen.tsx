import React, { Component } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContainerComponent from '../components/ContainerComponent';
import './SelectAnswerScreen.css'
import { GetSpotifyInfo } from '../components/HOCS/GetSpotifyInfoHoc';

interface Props {
    getSong:any
}
interface State {
    id: string,
    track: {
        id: string,
        name:string,
        artists: [{
            name:string
        }],
        album: {
            images:[
                {url:string}, //640
                {url:string}, //300
                {url:string} //64 px
            ],
            release_date: string,
            name:string
        }
    }
}

class SelectAnswerScreen extends Component <Props,State>{
    constructor(props:any) {
        super(props);
        this.state = {
            id: "",
            track: {
              id:"",
              name:"",
              artists : [{
                name:""
                  }],
                  album: {
                      images: [
                          {url:""},
                          {url:""},
                          {url:""}
                      ],
                      release_date:"",
                      name:""
                  }
            }
        }
    }

componentDidMount() {

    let trackId = document.URL;
    console.log(trackId)
    let trackIDSplit = trackId.split("/")
     let finalTrackID = trackIDSplit[4].substring(3)
     

  this.props.getSong(finalTrackID)
  .then((res:any) => {
     console.log(res)
     this.setState({track : res})});
}

    render() {

        const Artist = this.state.track.artists[0].name;
        const SongTitle = this.state.track.name;
         const AlbumTitle = this.state.track.album.name;
        const AlbumYear = this.state.track.album.release_date;

        return (
            <ContainerComponent>
                <Card.Body>
                    <Card.Title className="text-center">Select question answer</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="AnswerButton">
                            <Link to={{
                                pathname: "/questionform",
                                state: {
                                    answer: Artist
                                }
                            }} >
                                <Button className="AnswerButton">
                                    <h6>Artist</h6>
                                    <h4>{Artist}</h4>
                                </Button>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="AnswerButton">
                            <Link to={{
                                pathname: "/questionform",
                                state: {
                                    answer: SongTitle
                                }
                            }} >
                                <Button className="AnswerButton">
                                    <h6>Song Title</h6>
                                    <h4>{SongTitle}</h4>
                                </Button>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="AnswerButton">
                            <Link to={{
                                pathname: "/questionform",
                                state: {
                                    answer: AlbumTitle
                                }
                            }} >
                                <Button className="AnswerButton">
                                    <h6>Album Title</h6>
                                    <h4>{AlbumTitle}</h4>
                                </Button>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="AnswerButton">
                            <Link to={{
                                pathname: "/questionform",
                                state: {
                                    answer: AlbumYear
                                }
                            }} >
                                <Button className="AnswerButton">
                                    <h6>Release Year</h6>
                                    <h4>{AlbumYear}</h4>
                                </Button>
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </ContainerComponent>
        )
    }
}

export default GetSpotifyInfo(SelectAnswerScreen);