import { connect } from 'react-redux';
import Song from './song'
import { removeSongFromPlaylist } from '../../../actions/music_actions';
import { playSong } from '../../../actions/audio_player_actions';
import { like } from '../../../actions/like_actions';

const msp = (state, ownprops) => {
    const currentUser = state.entities.users[state.session.id];
    let likes = currentUser ? currentUser.likes.songs : null;

    return {
        likes,
        type: 'Song',
        loggedIn: !!(state.session.id)
    }
}

const mdp = dispatch => ({
    removeSongFromPlaylist: (playlistId, songId) => 
        dispatch(removeSongFromPlaylist(playlistId, songId)),
    like: (id) => dispatch(like('songs', id))
})

const SongContainer = connect(msp, mdp)(Song);
export default SongContainer;