import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import { pauseMusic, playNextSong } from '../../actions/audio_player_actions';

const msp = ({audioPlayer}) => ({
    active: audioPlayer.active,
    song: audioPlayer.currentSong
})

const mdp = dispatch => ({
    playNextSong: () => dispatch(playNextSong()),
    pauseMusic: () => dispatch(pauseMusic())
})

const AudioPlayerContainer = connect(msp, mdp)(AudioPlayer);
export default AudioPlayerContainer;