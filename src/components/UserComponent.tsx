/**
 * This component renders a user card to display the currently 
 * logged-in user's info.
 */

import React, { Component, Fragment } from 'react';
import { Card } from 'react-bootstrap';
import { GetSpotifyInfo } from '../components/HOCS/GetSpotifyInfoHoc';
import './UserComponent.css'

interface State {
    userName: string,
    userImg: {
        url: string
    },
    playLists: object
}
interface Props {
    getUser: any,
    runIt: any,
    getHashParams: any,
}

class UserComponent extends Component<Props, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            userName: '',
            userImg: {url: ''},
            playLists: []
        }
    }

    componentDidMount() {
        this.props.runIt();
        this.props.getUser()
            .then((res: any) => {
                console.log(res);
                this.setState({ userName: res.display_name, userImg: res.images[0] });
            });
    }

    render() {
        let userImage = <Card.Img className="userIcon" variant="top" src="http://placekitten.com/200/200" />
        if (this.state.userImg) {
            userImage = <Card.Img className="userIcon" variant="top" src={`${this.state.userImg.url}`} />
        }

        return (
            <Card className="border-0">
                <div className="text-center">
                    {userImage}
                </div>
                <Card.Body>
                    <Card.Title className="text-center">Hello {this.state.userName}!</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}

export default GetSpotifyInfo(UserComponent);