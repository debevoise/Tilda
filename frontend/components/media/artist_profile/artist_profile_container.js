import { fetchArtist } from "../../../actions/music_actions"
import { connect } from "react-redux"
import ArtistProfile from "./artist_profile"
import { playCollectionFromIdx } from "../../../actions/audio_player_actions";

const msp = (state, { match }) => {
    const id = parseInt(match.params.id);
    const { artists, albums, songs } = state.entities.music;
    const artist = artists[id];
    const artistAlbums = [];
    
    if (!artist || !artist.album_ids) return { artist: {}, artistAlbums, songs: {} }
    
    artist.album_ids.forEach((id) => {
        if (albums[id]) artistAlbums.push(albums[id])
    });

    return { artist, artistAlbums, songs }
}

const mdp = dispatch => {
    return {
        fetchArtist: (id) => dispatch(fetchArtist(id)),
        playCollectionFromIdx: (idx, songs) => dispatch(playCollectionFromIdx(idx, songs))
    }    
}

const ArtistContainer = connect(msp, mdp)(ArtistProfile);
export default ArtistContainer;