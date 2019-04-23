/**
 * This is a component which displays a single summary of
 * a playlist so the user can identify it easily.
 */

import React, { Component } from 'react';
import { Media } from 'react-bootstrap';

class PlaylistIconComponent extends Component {
    render() {
        return (
            <Media>
                <img
                    width={72}
                    height={72}
                    className="mr-3"
                    src="http://placekitten.com/72/72"
                />
                <Media.Body style={{ justifyContent: "left" }}>
                    <h5>Playlist X</h5>
                    <p>Song 1, Song 2, Song 3...</p>
                </Media.Body>
            </Media>
        )
    }
}

export default PlaylistIconComponent;