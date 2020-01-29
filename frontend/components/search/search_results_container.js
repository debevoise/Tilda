import {connect} from 'react-redux'
import SearchResults from './search_results'

const msp = state => {
    const {query, albumIds, artistIds, songIds, playlistIds} = state.entities.search;
    const { albums, artists, songs, playlists } = state.entities.music;

    const searchArtists = artistIds.map(id => artists[id]);
    const searchAlbums = albumIds.map(id => albums[id]);
    const searchSongs = songIds.map(id => songs[id]);
    const searchPlaylists = playlistIds.map(id => playlists[id]);
    const {entities} = state;

    return {
        searchArtists, searchAlbums, searchPlaylists, searchSongs, query, entities
    }
}

const mdp = dispatch => {
    return {}
}

const SearchResultsContainer = connect(msp, mdp)(SearchResults)
export default SearchResultsContainer;