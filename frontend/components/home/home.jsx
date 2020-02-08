import React, { Component } from 'react';
import Loading from '../loading/loading';
import MusicCard from '../media/music_card/music_card';

export default class Home extends Component {
    componentDidMount() {
        const {home, fetchHome} = this.props;
        if (!home) fetchHome();
    }
    
    render() {
        if (!this.props.home) return <Loading />;

        const { allArtists, artists, albums, playlists } = this.props; 

        let artistCards = artists.map(artist => {
            return <MusicCard cardtype='artist' key={artist.id} musicItem={artist}/>
        });

        let playlistCards = playlists.map(playlist => {
            return <MusicCard cardtype="playlist" key={playlist.id} musicItem={playlist} />
        });

        let albumCards = albums.map(album => {
            if (!album) return null;
            let owner = allArtists[album.artist_id] || {}
            return <MusicCard cardtype="album" key={album.id} musicItem={album} owner={owner}/>
        })

        return (
            <div className='content no-margin-right'>
                <main className='home-page'>
                    <header className='home-header'>
                        <h1>Welcome to TILDA!</h1>
                        <h3 className='home-links'>Made by <a href="https://www.simondebevoise.com/" rel="noopener noreferrer" target="_blank">Simon DeBevoise</a> | Check out Tilda <a href="https://github.com/debevoise/Tilda" rel="noopener noreferrer" target="_blank">on Github</a></h3>
                    </header>
                    <section>
                        <h2>Albums</h2>
                        <ul className='music-card-container'>{albumCards}</ul>
                    </section>
                    <section>   
                        <h2>Artists</h2>
                        <ul className='music-card-container'>{artistCards}</ul>
                    </section>
                    <section>
                        <h2>Playlists</h2>
                        <ul className='music-card-container'>{playlistCards}</ul>
                    </section>
                </main>
            </div>
        );
    }
}