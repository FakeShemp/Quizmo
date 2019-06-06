/**
 * This component renders a user card to display the currently 
 * logged-in user's info.
 */

import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { GetSpotifyInfo } from '../components/HOCS/GetSpotifyInfoHoc';
import './UserComponent.css';
import blankUser from '../images/Userimage.png';

interface State {
    userName: string,
    userId: string,
    userEmail: string,
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

// renders the usercomponent with image and name from spotify.
class UserComponent extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            userName: '',
            userId: '',
            userEmail: '',
            userImg: { url: '' },
            playLists: []
        }
    }

    componentDidMount() {
        this.props.runIt();
        this.props.getUser()
            .then((res: any) => {
                this.setState({
                    userName: res.display_name,
                    userImg: res.images[0],
                    userEmail: res.email,
                    userId: res.id
                });
                this.postUser(res.id, res.email);
            });
    }

    postUser = async (id: string, email: string) => {
        return await fetch('http://localhost:3012/users/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: id,
                email: email
            })
        });
    }

    render() {
        let userImage =
            <Card.Img
                className="userIcon"
                variant="top"
                src={blankUser}
            />

        if (this.state.userImg) {
            userImage =
                <Card.Img
                    className="userIcon"
                    variant="top"
                    src={`${this.state.userImg.url}`}
                />
        }

        return (
            <Card className="border-0 UserContainer">
                <div className="text-center">
                    {userImage}
                </div>
                <Card.Body className="UserContainer-body">
                    <Card.Title className="text-center"><h3>Hello {this.state.userName}!</h3></Card.Title>
                </Card.Body>
            </Card>
        )
    }
}

export default GetSpotifyInfo(UserComponent);