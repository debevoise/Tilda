import { connect } from "react-redux"
import Collection from "./collection"
import { fetchLikedArtists } from "../../actions/music_actions"

const msp = state => {
    const type = 'artist'
    const header = 'Artists you\'re following';
    const { users, music } = state.entities;
    const currentUser = users[state.session.id];
    let loaded = true;

    let likes = Object.keys(currentUser.likes.artists).map((id) => {
        let like = music.artists[id]
        if (!like) loaded = false;
        return like || null;
    });

    return { likes, header, loaded, type }
}

const mdp = dispatch => {
    return { fetchLikes: () => dispatch(fetchLikedArtists()) }
}

const ArtistCollectionContainer = connect(msp, mdp)(Collection);
export default ArtistCollectionContainer;
