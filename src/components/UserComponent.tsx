/**
 * This component renders a user card to display the currently 
 * logged-in user's info.
 */


import React, { Component, Fragment } from 'react';
import { Card } from 'react-bootstrap';
import {GetSpotifyInfo} from '../components/HOCS/GetSpotifyInfoHoc';


interface State {
    userName: string,
    userImg: any,
    playLists: object
}
interface Props {
    getUser:any,
    runIt:any,
    getHashParams:any,
}

class UserComponent extends Component <Props,State> {

    constructor(props:any) {
        super(props);
        this.state = {
            userName: '',
            userImg: '',
            playLists: []
        }
    }

    componentDidMount() {
        this.props.runIt();
       this.props.getUser()
       .then((res:any) => { 
           console.log(res);
           this.setState({userName:res.display_name, userImg: res.images[0]});
        });

      
    }

    render() {
        
        return (
            <Fragment>
                <Card.Img variant="top" style={{width: 60,borderRadius: 30,alignSelf: 'center'}} src={`${this.state.userImg.url}`} />
                <Card.Body>
                    <Card.Title>Hello {this.state.userName}</Card.Title>
                </Card.Body>
            </Fragment>
        )
    }
}

export default GetSpotifyInfo(UserComponent);