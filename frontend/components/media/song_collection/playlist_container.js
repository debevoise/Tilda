import { connect } from 'react-redux';

import { like } from '../../../actions/like_actions';
import { fetchPlaylist } from '../../../actions/music_actions';
import SongCollection from './song_collection';

const msp = (state, {match}) => {
    const playlistId = parseInt(match.params.id);
    const { playlists, songs } = state.entities.music;
    const { likes } = state.entities.users;
    const collection = playlists[playlistId] || {};
    return {
        collection,
        songs,
        likes,
        type: 'Playlist'
    }
}

const mdp = dispatch => ({
    like: (type, id) => dispatch(like(type, id)),
    unlike: (type, id) => dispatch(unlike(type, id)),
    fetchCollection: (id) => dispatch(fetchPlaylist(id))
})


const PlaylistContainer = connect(msp, mdp)(SongCollection);
export default PlaylistContainer;