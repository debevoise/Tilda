import React from 'react';
import AudioControlsMid from './audio_controls_mid';
import AudioControlsLeft from './audio_controls_left';

export default class AudioControlBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            active: false,
            currentSong: {},
            playerQueue: [],
            history: [],
            userQueue: [],
            currentTime: 0,
            volume: 100
        }
        //history is a stack, queues are......queues

        this.pause = this.pause.bind(this)
        this.play = this.play.bind(this)
        this.playNextSong = this.playNextSong.bind(this)
        this.playPreviousSong = this.playPreviousSong.bind(this)
        this.setCurrentTime = this.setCurrentTime.bind(this)
        this.getCurrentTime = this.getCurrentTime.bind(this)
    }


    componentDidUpdate(prevProps) {

        let {
            actionId,
            active,
            currentSong,
            playerQueue,
            userQueue,
            resetTime,
            history } = this.props;

        if (prevProps.actionId === actionId) return;
        
        if (this.state.currentSong === currentSong && resetTime && this.hasAudio()) {
            this.audio.currentTime = 0;
        } 

        this.setState({
            active,
            currentSong,
            playerQueue,
            userQueue,
            history
        })

    }

    hasAudio() {
        return this.audio && this.audio.src
    }

    pause() {
        this.setState({active: false})
    }

    play() {
        if (this.state.currentSong.id) this.setState({ active: true });
    }

    playNextSong() {
        let { history, currentSong, playerQueue, userQueue, active } = this.state
        if (currentSong.id) history.push(currentSong);

        if (userQueue.length !== 0) {
            currentSong = userQueue.shift()
        } else if (playerQueue.length !== 0) {
            currentSong = playerQueue.shift()
        } else {
            active = false;
            currentSong = {};
        }

        this.audio.currentTime = 0;
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
        let { history, currentSong, userQueue } = this.state
        let currentTime = this.audio.currentTime

        if (currentSong.id) {
            if (currentTime > 5 || history.length === 0) {
                this.audio.currentTime = 0
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
            history,
            currentSong,
            userQueue,
        })
    }


    setPlayStatus() {
        if (typeof this.audio === 'undefined') return
        (this.state.active && this.audio.src) ? this.audio.play() : this.audio.pause()
    }

    getCurrentTime(e) {
        let currentTime = Math.floor(this.audio.currentTime)

        this.setState({ currentTime})
    }

    setCurrentTime(time) {
        this.audio.currentTime = time;

        this.setState({ currentTime: time })
    }
    
    
    render() {   
        let duration = (this.audio && this.audio.duration) ? 
            Math.ceil(this.audio.duration) : 0;
        // let currentTime = (this.hasAudio()) ? Math.floor(this.audio.currentTime) : 0;
        this.setPlayStatus()
        let {currentSong } = this.state;

        return (
            <footer id='media-player'>
                <audio id='audio-player'
                    onEnded={this.playNextSong}
                    onTimeUpdate={this.getCurrentTime}
                    ref={audio =>  this.audio = audio }
                    src={currentSong.songFile}
                    autoPlay
                    >
                    Your browser does not support html audio.
                </audio>
                
                <AudioControlsLeft song={currentSong}/>
                <AudioControlsMid 
                    playNext={this.playNextSong}
                    playPrev={this.playPreviousSong}
                    pause={this.pause}
                    play={this.play}
                    setTime={this.setCurrentTime}
                    currentTime={this.state.currentTime}
                    duration={duration}
                    active={this.state.active}
                />

                {/* <AudioControlsRight />  */}
            </footer>
         )
    }
}



