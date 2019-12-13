import { connect } from 'react-redux';
import SongCollection from './song_collection';
import { like } from '../../../actions/like_actions';
import { fetchAlbum } from '../../../actions/music_actions';

const msp = (state, { match }) => {
    const albumId = parseInt(match.params.albumId);
    const { albums, songs } = state.entities.music;
    const { likes } = state.entities.users;
    const collection = albums[albumId] || {};
    return {
        collection,
        songs,
        likes,
        type: 'Album'
    }
}

const mdp = dispatch => ({
    like: (type, id) => dispatch(like(type, id)),
    fetchCollection: (id) => dispatch(fetchAlbum(id))
})


const AlbumContainer = connect(msp, mdp)(SongCollection);
export default AlbumContainer;