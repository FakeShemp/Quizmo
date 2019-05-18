import React, { Component, Fragment } from 'react';
import './AudioPlayerComponent.css';

interface Props {
    songPreview: string
}

interface State {
    playing:boolean,
}


class CustomMediaComponent extends Component<Props, State>{
    //some ts love right here.
    private audioPlayer: React.RefObject<HTMLAudioElement>;
    private progressBar: React.RefObject<HTMLProgressElement>;
    constructor(props: any) {
        super(props);
        this.state = {
            playing: false,
        }
        this.audioPlayer = React.createRef();
        this.progressBar = React.createRef();
    }

    


    play = () => {
        //it might be null so ts screams if this if statment is not here
        if (this.audioPlayer.current !== null) {
            if (!this.state.playing) {
                this.audioPlayer.current.play();
                this.setState({ playing: !this.state.playing });
            } else {
                this.audioPlayer.current.pause();
                //maybe it is annoying to restart the music?
                this.audioPlayer.current.currentTime = 0;
                this.setState({ playing: !this.state.playing })
            }

        }
    }

    updateProgress = () => {

        if (this.audioPlayer.current !== null && this.progressBar.current !== null) {
           this.progressBar.current.value = (this.audioPlayer.current.currentTime / this.audioPlayer.current.duration);
        }
    }


    render() { 
        
        return (
          <Fragment>
             {this.props.songPreview !== null ? 
             <Fragment>
                 <audio
                     ref={this.audioPlayer} onTimeUpdate={this.updateProgress} src={`${this.props.songPreview}`}>
                </audio>
                <div 
                     onClick={this.play} 
                     className={!this.state.playing ? "playBtn" : "pauseBtn"}>
                 </div>
                <progress 
                value={0} 
                ref={this.progressBar}>
                </progress>
         </Fragment> : <p className="playerText">No preview avalible</p>
                    }
          </Fragment>
        );


        }
    }

export default CustomMediaComponent;

