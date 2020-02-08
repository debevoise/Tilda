import { connect } from "react-redux"
import Collection from "./collection"

const msp = state => {
    return {}
}

const mdp = dispatch => {
    return {}
}

const ArtistCollectionContainer = connect(msp, mdp)(Collection);
export default ArtistCollectionContainer;
