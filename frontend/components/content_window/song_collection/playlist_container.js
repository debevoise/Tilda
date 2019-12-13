import { connect } from 'react-redux';
import SongCollection from './song_collection';
import { like } from '../../../actions/like_actions';
import { fetchPlaylist } from '../../../actions/music_actions';

const msp = (state, {match}) => {
    const playlistId = parseInt(match.params.playlistId);
    const { playlists, songs } = state.entities.music;
    const { likes } = state.entities.users;

    return {
        collection: playlists[playlistId],
        songs,
        likes,
        type: 'Playlist'
    }
}

const mdp = dispatch => ({
    like: (type, id) => dispatch(like(type, id)),
    fetchCollection: (id) => dispatch(fetchPlaylist(id))
})


const PlaylistContainer = connect(msp, mdp)(SongCollection);
export default PlaylistContainer;