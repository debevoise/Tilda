import PlaylistIndex from "./playlist_index";
import { connect } from 'react-redux';
import { fetchAuthoredPlaylists } from "../../../actions/music_actions";

const msp = (state) => {
    const currentUserId = state.session.id;
    const playlistIds = state.entities.users[currentUserId].authored_playlists
    
    return {
        playlists: state.entities.music.playlists,
        playlistIds,
        mode: 'navbar'
    }
}

const mdp = dispatch => ({
    fetchAuthoredPlaylists: () => dispatch(fetchAuthoredPlaylists())
})

const PlaylistNavContainer = connect(msp, mdp)(PlaylistIndex);
export default PlaylistNavContainer;

