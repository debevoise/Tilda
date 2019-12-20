import React from 'react';

export default class AudioControlsRight extends React.Component {
    constructor(props) {

        super(props);

        this.handleVolumeChange = this.handleVolumeChange.bind(this)
        // this.getVolume = this.getVolume.bind(this)

        this.state = { volume: 1 }
    }
    
    handleVolumeChange(e) {
        e.preventDefault();
        
        const width = this.volumeBar.getBoundingClientRect().width;
        const left = this.volumeBar.getBoundingClientRect().left;
        const pos = (e.clientX - left) / width;
        this.setState({ volume: pos })
        
    }



    // getVolumePercent() {
    //     const volume = 
    //     this.setState({ volume })
    //     if (this.props.audio) return Math.floor(this.props.audio.volume * 100);
    //     return 100;
    // }

    render() {
        let {audio} = this.props; 
        
        if (audio && audio.volume) {
            audio.volume = this.state.volume;
        }
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
                    <i className="material-icons">
                        {volumeIcon}
                    </i>
                </span>
                <progress
                    onClick={this.handleVolumeChange}
                    max='100'
                    ref={volumeBar => this.volumeBar = volumeBar}
                    value={this.state.volume * 100}></progress>
            </div>
        );

    }
}