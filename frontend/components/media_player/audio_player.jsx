import React from 'react';

export default class AudioPlayer extends React.Component {


    render() {
        const {song} = this.props;
        if (!song) return null;
        const { songFile } = song;
        debugger
        return (
            <audio
                className='audio-player'
                src={songFile}>
                Your browser does not support the
                audio element.
            </audio>
        )
    }
}