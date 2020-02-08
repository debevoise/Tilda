import { connect } from "react-redux"
import Collection from "./collection"

const msp = state => {
    return {}
}

const mdp = dispatch => {
    return {}
}

const PlaylistCollectionContainer = connect(msp, mdp)(Collection);
export default PlaylistCollectionContainer;