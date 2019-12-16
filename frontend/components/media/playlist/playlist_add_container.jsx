import PlaylistIndex from "./playlist_index";
import { connect } from 'react-redux';
import { fetchAuthoredPlaylists } from "../../../actions/music_actions";
                 
const msp = (state) => {             
    const currentUserId = state.session.id;
    const playlistIds = state.entities.users[currentUserId].authored_playlists

    return {
        playlists: state.entities.music.playlists,
        playlistIds,
        mode: 'addToPlaylist'
    }
}

const mdp = dispatch => ({
    fetchAuthoredPlaylists: () => dispatch(fetchAuthoredPlaylists()),
    
})

// addSongToPlaylist: (playlistId, songId) => dispatch(addSongToPlaylist(playlistId, songId))

const PlaylistAddContainer = connect(msp, mdp)(PlaylistIndex);
export default PlaylistAddContainer;

