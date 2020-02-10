import { connect } from "react-redux"
import Collection from "./collection"
import { fetchLikedPlaylists } from "../../actions/music_actions"

const msp = state => {
    const type = 'playlist';
    const header = 'Liked Playlists';
    const { users, music } = state.entities;
    const currentUser = users[state.session.id];
    let loaded = true;

    let likes = Object.keys(currentUser.likes.playlists).map((id) => {
        let like = music.playlists[id]
        if (!like) loaded = false;
        return like || null;
    });

    return { likes, header, loaded, type };
}

const mdp = dispatch => {
    return { fetchLikes: () => dispatch(fetchLikedPlaylists()) };
}

const PlaylistCollectionContainer = connect(msp, mdp)(Collection);
export default PlaylistCollectionContainer;