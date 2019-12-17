import { connect } from 'react-redux';
import AudioPlayer from './audio_player';

const msp = ({audioPlayer}) => ({
    active: audioPlayer.active,
    song: audioPlayer.currentSong
})

const mdp = dispatch => ({
    playNextSong: () => dispatch(playNextSong())
})

const AudioPlayerContainer = connect(msp, mdp)(AudioPlayer);
export default AudioPlayerContainer;