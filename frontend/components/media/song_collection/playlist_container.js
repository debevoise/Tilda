import { connect } from 'react-redux';

import { like } from '../../../actions/like_actions';
import { fetchPlaylist } from '../../../actions/music_actions';
import SongCollection from './song_collection';
import { playCollectionFromIdx } from '../../../actions/audio_player_actions';

const msp = (state, {match}) => {
    const playlistId = parseInt(match.params.id);
    const { playlists, songs } = state.entities.music;
    let authored = false;
    const currentUser = state.entities.users[state.session.id]
    let liked = !!(currentUser && currentUser.likes.playlists[playlistId]);
    // const likes = (currentUser) ? currentUser.likes : null;
    
    const collection = playlists[playlistId] || {};
    
    if (currentUser && currentUser.authored_playlists.includes(playlistId)) {
        authored = playlistId
    } 

    return {
        collection,
        songs,
        liked,
        owner: 'Playlist',
        type: 'Playlist',
        authored
    }
}

const mdp = dispatch => ({
    like: (id) => dispatch(like('playlists', id)),
    likeSong: (id) => dispatch(like('songs', id)),
    fetchCollection: (id) => dispatch(fetchPlaylist(id)),
    playCollectionFromIdx: (songArray, idx) => dispatch(playCollectionFromIdx(songArray, idx))
})


const PlaylistContainer = connect(msp, mdp)(SongCollection);
export default PlaylistContainer;