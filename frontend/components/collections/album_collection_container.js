import { connect } from "react-redux"
import Collection from "./collection"

const msp = state => {
    return {}
}

const mdp = dispatch => {
    return {}
}

const AlbumCollectionContainer = connect(msp, mdp)(Collection);
export default AlbumCollectionContainer;