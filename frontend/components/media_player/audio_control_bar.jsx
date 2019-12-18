import React from 'react';
import AudioControlsMid from './audio_controls_mid';

export default class AudioControlBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            active: false,
            currentSong: {},
            currentTime: 0,
            playerQueue: [],
            history: [],
            userQueue: [],
            volume: 100
        }

        //history is a stack, queues are......queues
    }

    pause() {
        
    }

    playNextSong() {
        const { history, currentSong, playerQueue, userQueue, active } = this.state
        if (currentSong.id) history.push(currentSong);

        if (userQueue.length !== 0) {
            currentSong = userQueue.shift()
        } else if (playerQueue.length !== 0) {
            currentSong = playerQueue.shift()
        } else {
            active = false;
            currentSong = {};
        }

        this.setState({
            currentTime: 0,
            history,
            currentSong,
            playerQueue,
            userQueue
        })
    }
    
    
    render() {   
        return (
            <footer id='media-player'>
                <audio id='audio-player'
                    onEnded={this.nextTrack}
                    onTimeUpdate={this.updateElapsed}
                    ref={audio =>  this.audio = audio }
                    src={this.state.currentSong.songFile}>
                    Your browser does not support html audio.
                </audio>
                
                <AudioControlsMid />
                {/* <AudioControlsLeft />
                
                <AudioControlsRight /> */}
            </footer>
         )
    }
}



