import { connect } from "react-redux"
import Collection from "./collection"
import { fetchLikedAlbums } from "../../actions/music_actions";

const msp = state => {
    const type = 'album'
    const header = 'Liked Albums'
    const { users, music } = state.entities;
    const currentUser = users[state.session.id];
    let loaded = true;

    let likes = Object.keys(currentUser.likes.albums).map((id) => {
        let like = music.albums[id];
        
        if (!like) { 
            loaded = false;
            return null;
        }
        
        like.owner = music.artists[like.artist_id] || {};
        return like;
    });

    return { likes, header, loaded, type };
}

const mdp = dispatch => {
    return {
        fetchLikes: () => dispatch(fetchLikedAlbums())
    }
}

const AlbumCollectionContainer = connect(msp, mdp)(Collection);
export default AlbumCollectionContainer;