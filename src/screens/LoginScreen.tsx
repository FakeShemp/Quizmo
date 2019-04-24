import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import Spotify from 'spotify-web-api-js';

//webspotifymagic
const spotifyWebApi = new Spotify();


interface State {
    loggedIn: boolean,
    nowPlaying: {
    name: string,
    image: any
    }
}

class LoginScreen  extends Component <{},State> {
    constructor(props:any) {
        super(props);
        
        this.state = {
            loggedIn: false,
            nowPlaying: {
                name: 'Not Checked',
                image: ''
            }
        }

        }

        // spotify magic that decodes the para(i may be wrong here //jocke.)
    getHashParams() {
        var hashParams:any = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        console.log(hashParams)
        return hashParams;
      }

        componentDidMount() {

            const params = this.getHashParams();
            if(params.access_token) {
                spotifyWebApi.setAccessToken(params.access_token);

            }
            params.acces_token ? this.setState({loggedIn: true}) : this.setState({loggedIn:false});
        }


        getUser = () => {
            const user = "https://api.spotify.com/v1/me";
            spotifyWebApi.getGeneric(user)
            .then((res:any) => {
                console.log(res)
            })
        }


        // fetch with spotifywebapi
    // getNowPlaying = () => {
    //     spotifyWebApi.getMyCurrentPlaybackState()
    //     .then((res:any) => {
    //         console.log(res);
    //         console.log(res)
    //         this.setState({
                
    //             nowPlaying: {
    //                 name: res.item.name,
    //                 image: res.item.album.images[0] 
    //             }
    //         })
    //     })
    // }

    getplayLists = () => {
        spotifyWebApi.getUserPlaylists()
        .then((res:any) => {
            console.log(res)
        })
    }
  

   public render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title><h1>Quizmo</h1></Card.Title>
                    <a href='http://localhost:8888'>
                    <Button variant="success">Log in with Spotify</Button>
                    </a>
                    <div>Now playing: { this.state.nowPlaying.name }</div>
                    <img src={ this.state.nowPlaying.image } style={{width: 100}}/>
                    <button onClick={() => this.getUser()}>user</button>
                    <button onClick={() => this.getplayLists()}>playlists</button>
                    
                </Card.Body>
            </Card>
        )
    }
}

export default LoginScreen;