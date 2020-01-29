import { fetchArtist } from "../../../actions/music_actions"

const msp = state => {

    return {}
}

const mdp = dispatch => {
    return {
        fetchArtist: (id) => dispatch(fetchArtist(id))
    }    
}