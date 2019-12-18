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

        this.pause = this.pause.bind(this)
        this.play = this.play.bind(this)
        this.playNextSong = this.playNextSong.bind(this)
        this.playPreviousSong = this.playPreviousSong.bind(this)
        this.setCurrentTime = this.setCurrentTime.bind(this)
        //history is a stack, queues are......queues
    }


    componentDidUpdate(prevProps) {
        debugger
        const {
            actionId,
            active,
            currentSong,
            playerQueue,
            userQueue,
            history } = this.props;

        if (prevProps.actionId === actionId) return;

        this.setState({
            active,
            currentSong,
            playerQueue,
            userQueue,
            history
        })

    }

    pause() {
        this.setState({active: false})
    }

    play() {
        if (this.state.currentSong.id) this.setState({ active: true });
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
            userQueue,
            active
        })
    }

    playPreviousSong() {
        const { history, currentSong, userQueue, currentTime } = this.state
        if (currentSong.id) {
            if (currentTime > 5 || history.length === 0) {
                this.setState({currentTime: 0})
                return;
            }

            userQueue.unshift(currentSong)
            currentSong = history.pop();
        } else {
            if (history.length === 0) {
                this.setState({active: false})
                return;
            }
        }

        this.setState({
            currentTime: 0,
            history,
            currentSong,
            userQueue,
        })
    }

    setCurrentTime(e) {
        let time = Math.ceil(e.timeStamp / 1000)
        this.setState({currentTime: time})
    }
    
    
    render() {   
        let duration = (this.audio && this.audio.duration) ? 
            Math.ceil(this.audio.duration) : 0;

        return (
            <footer id='media-player'>
                <audio id='audio-player'
                    onEnded={this.playNextSong}
                    onTimeUpdate={this.setCurrentTime}
                    ref={audio =>  this.audio = audio }
                    src={this.state.currentSong.songFile}
                    autoPlay
                    >
                    Your browser does not support html audio.
                </audio>
                
                <AudioControlsMid 
                    playNext={this.playNextSong}
                    playPrev={this.playPreviousSong}
                    pause={this.pause}
                    play={this.play}
                    currentTime={this.state.currentTime}
                    duration={duration}
                    active={this.state.active}
                />
                {/* <AudioControlsLeft />
                
                <AudioControlsRight /> */}
            </footer>
         )
    }
}



