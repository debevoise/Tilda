import React from 'react';
import MusicCard from '../media/music_card/music_card';

export default class SearchResults extends React.Component {
    constructor(props) {
        super(props)

    }

    renderNoQuery() {
        const { query } = this.props;
        if (query.length === 0) {
            return (
                
                <h1>
                    Search for your new favorite music.
                </h1>
            )
        } else {
            return null;
        }
    }

    renderArtists() {
        const {searchArtists} = this.props;
        if (searchArtists.length === 0) return null;

        let artistCards = searchArtists.map((artist, i) => {
            return <MusicCard cardtype="artist" key={i} musicItem={artist} />;
        });
        return (
            <>
                <h1>Artists</h1>
                <ul>{artistCards}</ul>
            </>
        );
    }

    renderAlbums() {
        const {searchAlbums} = this.props;
        if (searchAlbums.length === 0) return null;

        let albumCards = searchAlbums.map((album, i) => {

            let owner = this.props.entities.music.artists[album.artist_id] || {}
            return <MusicCard cardtype="album" key={i} musicItem={album} owner={owner}/>;
        });
        return (
            <>
                <h1>Albums</h1>
                <ul>{albumCards}</ul>
            </>
        );
    }

    renderPlaylists() {
        const {searchPlaylists} = this.props;
        if (searchPlaylists.length === 0) return null; 
        
        let playlistCards = searchPlaylists.map((pl, i) => {
            return <MusicCard cardtype='playlist' key={i} musicItem={pl}/>
        })
        return (
            <>
                <h1>Playlists</h1>
                <ul>
                    {playlistCards}
                </ul>
            </>
        )
    }

    renderNoResults() {
        return (
            <h1 className='no-search-results'>
                No results... try something else.
            </h1>
        )
    }
    
    render() {

        if (this.props.query.length === 0) {
            return this.renderNoQuery();
        };

        let {searchAlbums, searchArtists, searchSongs, searchPlaylists} = this.props;
        let noResults = (
            searchAlbums.length === 0 && 
            searchArtists.length === 0 && 
            searchSongs.length === 0 && 
            searchPlaylists.length === 0)

        if (noResults) return this.renderNoResults();

        return (
            <section className='search-results'>
                {this.renderArtists()}
                {this.renderAlbums()}
                {/* {this.renderSongs()} */}
                {this.renderPlaylists()}
            </section>
        );
    }
}

//PROPS: searchArtists, searchAlbums, searchPlaylists, searchSongs, query