import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setAccessToken } from '../../actions';

interface Props {
    access_token: string,
    refresh_token: string,
    setNewAccessToken(access_token?: string): void,
    setNewRefreshToken(refresh_token?: string): void
}

export const SpotifyAccessComponent = (WrappedComponent: any) => {
    // return class extends React.Component<Props> {
    return class extends React.Component {
        constructor(props: any) {
            super(props)
        }

        getHashParams() {
            var hashParams: any = {};
            var e, r = /([^&;=]+)=?([^&;]*)/g,
                q = window.location.hash.substring(1);
            while (e = r.exec(q)) {
                hashParams[e[1]] = decodeURIComponent(e[2]);
            }
            return hashParams;
        }

        setNewAccessToken = () => {
            const params = this.getHashParams();
            if (params.access_token) {
                localStorage.setItem('access_token', params.access_token);
            }
        }

        setNewRefreshToken = () => {
            const params = this.getHashParams();
            if (params.refresh_token) {
                localStorage.setItem('refresh_token', params.refresh_token);
            }
        }

        render() {
            return <WrappedComponent setNewAccessToken={this.setNewAccessToken} setNewRefreshToken={this.setNewRefreshToken} getHashParams={this.getHashParams} {...this.props} />
        };
    }
}

const mapStateToProps = (state: any, ownProps: any) => ({
    access_token: state.root.access_token
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    setNewAccessToken: (access_token: string) => dispatch(setAccessToken(access_token))
})

const composedAccessComponent = compose(
    connect(mapStateToProps, null),
    SpotifyAccessComponent
)

export default composedAccessComponent;
