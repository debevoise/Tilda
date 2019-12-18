import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import { pauseMusic, playNextSong } from '../../actions/audio_player_actions';
import AudioControlBar from './audio_control_bar';

const msp = ({audioPlayer}) => {
    const {
        actionId, 
        active, 
        currentSong, 
        playerQueue, 
        userQueue, 
        history } = audioPlayer;
    
    return {
        actionId,
        active,
        currentSong,
        playerQueue,
        userQueue,
        history
    }
}

const mdp = dispatch => ({
    playNextSong: () => dispatch(playNextSong()),
    pauseMusic: () => dispatch(pauseMusic())
})

const AudioPlayerContainer = connect(msp, null)(AudioControlBar);
export default AudioPlayerContainer;