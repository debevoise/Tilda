import React from 'react';
import * as PlayerComponentUtil from '../../util/player_component_util'

export default class AudioControlsMid extends React.Component {
    constructor(props) {
        super(props);
        this.togglePlayPause = this.togglePlayPause.bind(this)
    } 


    
    renderTime(seconds) {
        return PlayerComponentUtil.formatTime(seconds);
    }

    getProgress() {
        let { duration, currentTime } = this.props;
        if (duration === 0) return 0;
        if (currentTime > duration) return 100;
        return 100 * (currentTime / duration);
    }

    togglePlayPause(e) {
        e.preventDefault()
        const { active, play, pause } = this.props;
        (active) ? pause() : play()
    }

    render() {
        let { duration, currentTime, active, playNext, playPrev } = this.props;
        let progress = this.getProgress().toString();
        let playPauseIcon = active ? 'pause_circle_outline' : 'play_circle_outline'

        return (
            <div className='ac-mid'>
                <div className='audio-controls'>
                    <button>
                        <i className="material-icons">
                            shuffle
                        </i>
                    </button>
                    <button>
                        <i className="material-icons" onClick={playPrev}>
                            skip_previous
                        </i>
                    </button>
                    <button className='play-pause' onClick={this.togglePlayPause}>
                        <i className="material-icons">
                            {playPauseIcon}
                        </i>
                    </button>
                    <button>
                        <i className="material-icons" onClick={playNext}>
                            skip_next
                        </i>
                    </button>
                    <button>
                        <i className="material-icons">
                            loop
                        </i>
                    </button>
                </div>
                <div className='progress-container'>
                    <span>{PlayerComponentUtil.formatTime(currentTime)}</span>
                    <div className='progress-bar'>
                        <span className='player-position'></span>
                        <progress max='100' value='30'></progress>
                    </div>
                    <span>{PlayerComponentUtil.formatTime(duration)}</span>

                </div>
            </div>
        )
    }
}