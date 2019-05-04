import React from 'react';
import { connect } from 'react-redux';
import { setAccessToken } from '../actions';

interface Props {
    token: string,
    setNewAccessToken(token?: string): void
}

// export const SpotifyAccess = (WrappedComponent:any) => {
// return class extends React.Component<Props> {
class SpotifyAccessComponent extends React.Component<Props> {
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
            this.props.setNewAccessToken(params.access_token);
        }
    }

    render() {
        // return <WrappedComponent setNewAccessToken = {this.setNewAccessToken} getHashParams = {this.getHashParams} {...this.props} />
        return <p></p>
    };
}

const mapStateToProps = (state: any, ownProps: any) => ({
    token: state.root.token
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    setNewAccessToken: (token: string) => dispatch(setAccessToken(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(SpotifyAccessComponent);
