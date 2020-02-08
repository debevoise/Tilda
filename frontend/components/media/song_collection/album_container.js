import { connect } from 'react-redux';
import SongCollection from './song_collection';
import { like } from '../../../actions/like_actions';
import { fetchAlbum } from '../../../actions/music_actions';
import { playCollectionFromIdx } from '../../../actions/audio_player_actions';

const msp = (state, { match }) => {
    const id = parseInt(match.params.id);
    const { albums, artists, songs } = state.entities.music;
    

    const currentUser = state.entities.users[state.session.id];
    let liked = !!(currentUser && currentUser.likes.albums[id]);
    const collection = albums[id] || {};
    const owner = artists[collection.artist_id];
    
    return {
        collection,
        songs,
        liked,
        type: 'Album',
        owner,
        authored: false
    }
}

const mdp = dispatch => ({
    like: (id) => dispatch(like('albums', id)),
    likeSong: (id) => dispatch(like('songs', id)),
    fetchCollection: (id) => dispatch(fetchAlbum(id)),
    playCollectionFromIdx: (songArray, idx) => dispatch(playCollectionFromIdx(songArray, idx))
})


const AlbumContainer = connect(msp, mdp)(SongCollection);
export default AlbumContainer;