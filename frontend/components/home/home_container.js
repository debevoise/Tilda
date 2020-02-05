import { connect } from "react-redux"
import Home from "./home"
import { fetchHome } from "../../actions/home_actions";

const msp = state => {
    const { home, music } = state.entities;

    if (Object.entries(home).length === 0) return { }

    const artists = home.artistIds.map(id => music.artists[id])
    const albums = home.albumIds.map(id => music.albums[id])
    const playlists = home.playlistIds.map(id => music.playlists[id])

    return {
        home,
        artists,
        albums,
        playlists
    }
}

const mdp = dispatch => {
    return {
        fetchHome: () => dispatch(fetchHome())
    }
}

const HomeContainer = connect(msp, mdp)(Home);
export default HomeContainer;