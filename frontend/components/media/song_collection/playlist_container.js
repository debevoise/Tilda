import { connect } from 'react-redux';

import { like } from '../../../actions/like_actions';
import { fetchPlaylist } from '../../../actions/music_actions';
import SongCollection from './song_collection';

const msp = (state, {match}) => {
    const playlistId = parseInt(match.params.id);
    const { playlists, songs } = state.entities.music;
    const currentUser = state.entities.users[state.session.id]
    const { likes } = currentUser;
    const collection = playlists[playlistId] || {};
    let authored;
    if (currentUser.authored_playlists.includes(playlistId)) {
        authored = playlistId
    } else {
        authored = false;
    }

    return {
        collection,
        songs,
        likes,
        type: 'Playlist',
        authored
    }
}

const mdp = dispatch => ({
    like: (type, id) => dispatch(like(type, id)),
    unlike: (type, id) => dispatch(unlike(type, id)),
    fetchCollection: (id) => dispatch(fetchPlaylist(id))
})


const PlaylistContainer = connect(msp, mdp)(SongCollection);
export default PlaylistContainer;