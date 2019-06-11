import React from 'react';

export const GetBackendInfo = (WrappedComponent: any) => {
    return class extends React.Component {
        getUser = async (id: string) => {
            const res = await fetch(`http://localhost:3012/user/${id}`);
            if (res.ok) {
                return await res.json();
            }
        }

        getUserBySpotifyId = async (id: string) => {
            const res = await fetch(`http://localhost:3012/spotify/${id}`);
            if (res.ok && res.status == 200) {
                return await res.json();
            }
            return new Array();
        }

        postUser = async (id: string, email: string) => {
            return await fetch('http://localhost:3012/user/', {
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

        getQuizzes = async (userId: string) => {
            const res = await fetch('http://localhost:3012/quiz/' + userId);
            if (res.ok) {
                return await res.json();
            }
        }

        render() {
            return <WrappedComponent
                backend={{
                    getUser: this.getUser,
                    getUserBySpotifyId: this.getUserBySpotifyId,
                    postUser: this.postUser,
                    getQuizzes: this.getQuizzes
                }}
                {...this.props}
            />
        };
    }
}
