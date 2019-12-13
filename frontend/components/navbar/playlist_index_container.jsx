import PlaylistIndex from "./playlist_index";
import { connect } from 'react-redux';
import { fetchAuthoredPlaylists } from "../../actions/music_actions";

const msp = (state) => ({
    playlists: Object.values(state.entities.music.playlists)
})

const mdp = dispatch => ({
    fetchAuthoredPlaylists: () => dispatch(fetchAuthoredPlaylists())
})

const PlaylistIndexContainer = connect(msp, mdp)(PlaylistIndex);
export default PlaylistIndexContainer;

