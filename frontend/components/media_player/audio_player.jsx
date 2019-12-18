import React from 'react';

export default class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.audio = document.getElementById('audio-player');
        this.audio.addEventListener('ended', () => {
            this.props.pauseMusic();
            this.props.playNextSong();
        });

        this.src = null;
        this.currentTime = 0;


    }
    

    componentDidUpdate() {
        const { active, song } = this.props;

        if (song.songFile) {
            this.audio.src = song.songFile;
        }
        if (active) this.audio.play();

        // debugger
        
        // const sourceChanged = ();

        // if (song.songFile) {

        // }
        

        // if (active !== prevProps.active) {
        //     active ? this.audio.play() : this.audio.pause()
        //     debugger
        // }
    }
    
    
    render() {
        return null;
    }
}