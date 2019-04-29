import React from 'react';
import Spotify from 'spotify-web-api-js';

//all the spotify magic in one hoc
  export const GetSpotifyInfo = (WrappedComponent:any) => {

    //webspotifymagic
const spotifyWebApi = new Spotify();

        return class extends React.Component {
          
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

      
      runIt() {

            const params = this.getHashParams();
            if(params.access_token) {
                spotifyWebApi.setAccessToken(params.access_token);
            }

        }

        getUser = () => {
            
            const user = "https://api.spotify.com/v1/me";
           const userInfo = spotifyWebApi.getGeneric(user)
            .then(res => res)
        
            return userInfo;
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

    getPlayLists = () => {

       const list = spotifyWebApi.getUserPlaylists()
        .then((res:any) => {
            return res;
        })

        return list;
    }

        render() {
        return <WrappedComponent getPlayLists = {this.getPlayLists} getHashParams = {this.getHashParams} getUser = {this.getUser} runIt = {this.runIt} {...this.props} />
        };
    }

}
