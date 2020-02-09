import { connect } from "react-redux"
import SongCollection from "../media/song_collection/song_collection"

const msp = state => {
    
    
    return {
        likes,
    }
}

const mdp = dispatch => {
    return {

    }
}

const LikedSongsContainer = connect(msp, mdp)(SongCollection);
export default LikedSongsContainer;