import { connect } from "react-redux"
import SongCollection from "../media/song_collection/song_collection"
import { fetchLikedSongs } from "../../actions/music_actions"
import { playCollectionFromIdx } from "../../actions/audio_player_actions"
import LikedSongs from "./liked_songs"

const msp = state => {
    const { users, music } = state.entities;
    const currentUser = users[state.session.id];
    
    let loaded = true;

    let likes = Object.keys(currentUser.likes.songs).map((id) => {
        let like = music.songs[id];

        if (!like) {
            loaded = false;
            return null;
        }

        return like;
    });

    return { likes, loaded };
}

const mdp = dispatch => {
    return {
        fetchLikes: () => dispatch(fetchLikedSongs()),
        playCollectionFromIdx: (songArray, idx) => dispatch(playCollectionFromIdx(songArray, idx))
    }
}

const LikedSongsContainer = connect(msp, mdp)(LikedSongs);
export default LikedSongsContainer;