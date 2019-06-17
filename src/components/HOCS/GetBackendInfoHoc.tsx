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

        postQuiz = async (name: string, user: string, questions:any) => {
            return await fetch('http://localhost:3012/quiz', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    user: user,
                    questions: questions
                })
            });
        }

        deleteQuiz = async (id: string) => {
            fetch(`http://localhost:3012/quiz/${id}`, {
              method: 'DELETE',
            }).then(res => res.json())
              .then(response => console.log('Success:', JSON.stringify(response)))
              .catch(error => console.error('Error:', error));
          }

        render() {
            return <WrappedComponent
                backend={{
                    getUser: this.getUser,
                    getUserBySpotifyId: this.getUserBySpotifyId,
                    postUser: this.postUser,
                    getQuizzes: this.getQuizzes,
                    postQuiz: this.postQuiz,
                    deleteQuiz: this.deleteQuiz
                }}
                {...this.props}
            />
        };
    }
}
