import React from 'react';
import AudioControlsMid from './audio_controls_mid';

const AudioControlBar = (props) => {
    return (
        <footer id='media-player'>
            <AudioControlsMid />
            {/* <AudioControlsLeft />
            
            <AudioControlsRight /> */}
        </footer>
    )
}

export default AudioControlBar;

