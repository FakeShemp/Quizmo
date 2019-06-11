import React from 'react';
import Spotify from 'spotify-web-api-js';

//all the spotify magic in one hoc
export const GetSpotifyInfo = (WrappedComponent: any) => {

    //webspotifymagic
    const spotifyWebApi = new Spotify();


    return class extends React.Component {


        // spotify magic that decodes the para(i may be wrong here //jocke.)

        getHashParams() {
            var hashParams: any = {};
            var e, r = /([^&;=]+)=?([^&;]*)/g,
                q = window.location.hash.substring(1);
            while (e = r.exec(q)) {
                hashParams[e[1]] = decodeURIComponent(e[2]);
            }
            return hashParams;
        }


        runIt() {

            const params = this.getHashParams();
            if (params.access_token) {
                spotifyWebApi.setAccessToken(params.access_token);
                localStorage.setItem('token', `#access_token=${params.access_token}`);
            }

        }

        // get info about the spotify account tha is logged in
        getUser = () => {
            const user = "https://api.spotify.com/v1/me";
            const userInfo = spotifyWebApi.getGeneric(user)
                .then(res => res)

            return userInfo;
        }


        //get the sonngs from the playlist that was klicked
        getSongs = (tracks: any) => {
            // let tracks = "01sSbL6K4VJr6lxYZiI5Ym"
            let returnTracks = spotifyWebApi.getPlaylist(tracks)
                .then((res: any) => {

                    return res.tracks.items;
                })
            return returnTracks;

        }

        getSong = (track: any) => {

            let returnTrack = spotifyWebApi.getTrack(track)
                .then((res: any) => {

                    return res;
                })
            return returnTrack;

        }


        // fetch the playlists that is connected the account
        getPlayLists = () => {

            const list = spotifyWebApi.getUserPlaylists()
                .then((res: any) => {
                    return res;
                })

            return list;
        }

        render() {
            return <WrappedComponent getSong={this.getSong} getSongs={this.getSongs} getPlayLists={this.getPlayLists} getHashParams={this.getHashParams} getUser={this.getUser} runIt={this.runIt} {...this.props} />
        };
    }

}
