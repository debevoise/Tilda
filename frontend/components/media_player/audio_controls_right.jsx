import React from 'react';

export default class AudioControlsRight extends React.Component {
    constructor(props) {

        super(props);

        this.handleVolumeChange = this.handleVolumeChange.bind(this)
        this.getVolume = this.getVolume.bind(this)
    }
    
    handleVolumeChange(e) {
        e.preventDefault();
        if (!this.props.audio) return;
        const width = this.volumeBar.getBoundingClientRect().width;
        const left = this.volumeBar.getBoundingClientRect().left;
        const pos = (e.clientX - left) / width;
        this.props.audio.volume = pos;
    }



    getVolume() {
        if (this.props.audio) return Math.floor(this.props.audio.volume * 100);
        return 100;
    }

    render() {
        let {audio, setVolume} = this.props; 
        let volume = audio ? audio.volume : 1;
        let volumeIcon;
        switch (volume) {
            case volume < 0.1:
                volumeIcon = 'volume_mute'
                break;
            case volume < 0.6:
                volumeIcon = 'volume_down'
                break;
            default:
                volumeIcon = 'volume_up'
                break;
        }
        
        return (
            <div className='ac-right'>
                <span>
                    <i class="material-icons">
                        {volumeIcon}
                    </i>
                </span>
                <progress
                    onClick={this.handleVolumeChange}
                    max='100'
                    ref={volumeBar => this.volumeBar = volumeBar}
                    value={this.getVolume()}></progress>
            </div>
        );

    }
}