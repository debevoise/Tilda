import { connect } from 'react-redux';
import SongCollection from './song_collection';
import { like } from '../../../actions/like_actions';
import { fetchAlbum } from '../../../actions/music_actions';
import { playCollectionFromIdx } from '../../../actions/audio_player_actions';

const msp = (state, { match }) => {

    const id = parseInt(match.params.id);
    const { albums, songs } = state.entities.music;
    const { likes } = state.entities.users;
    const collection = albums[id] || {};
    return {
        collection,
        songs,
        likes,
        type: 'Album',
        authored: false
    }
}

const mdp = dispatch => ({
    like: (type, id) => dispatch(like(type, id)),
    unlike: (type, id) => dispatch(unlike(type, id)),
    fetchCollection: (id) => dispatch(fetchAlbum(id)),
    playCollectionFromIdx: (songArray, idx) => dispatch(playCollectionFromIdx(songArray, idx))
})


const AlbumContainer = connect(msp, mdp)(SongCollection);
export default AlbumContainer;