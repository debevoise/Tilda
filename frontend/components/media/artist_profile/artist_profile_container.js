import { fetchArtist } from "../../../actions/music_actions"
import { connect } from "react-redux"
import ArtistProfile from "./artist_profile"

const msp = (state, { match }) => {
    const id = parseInt(match.params.id);
    const { artists, albums } = state.entities.music;
    const artist = artists[id];

    return { artist }
}

const mdp = dispatch => {
    return {
        fetchArtist: (id) => dispatch(fetchArtist(id))
    }    
}

const ArtistContainer = connect(msp, mdp)(ArtistProfile);
export default ArtistContainer;