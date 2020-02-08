import { connect } from "react-redux"
import SongCollection from "../media/song_collection/song_collection"

const msp = state => {
    return {}
}

const mdp = dispatch => {
    return {}
}

const SongCollectionContainer = connect(msp, mdp)(SongCollection);
export default SongCollectionContainer;