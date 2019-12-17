import { connect } from 'react-redux';
import Song from './song'
import { removeSongFromPlaylist } from '../../../actions/music_actions';
import { playSong } from '../../../actions/audio_player_actions';

const msp = (state, ownprops) => ({
    type: 'Song'
})

const mdp = dispatch => ({
    removeSongFromPlaylist: (playlistId, songId) => 
        dispatch(removeSongFromPlaylist(playlistId, songId)),
    playSong: (song) => dispatch(playSong(song))
})

const SongContainer = connect(msp, mdp)(Song);
export default SongContainer;