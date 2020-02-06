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
            <div className='content'>
                <main className='home-page'>
                    <header className='home-header'>
                        <h1>Discover new music!</h1>
                    </header>
                    <section>
                        <h2>Albums</h2>
                        <ul>{albumCards}</ul>
                    </section>
                    <section>   
                        <h2>Artists</h2>
                        <ul>{artistCards}</ul>
                    </section>
                    <section>
                        <h2>Playlists</h2>
                        <ul>{playlistCards}</ul>
                    </section>
                </main>
            </div>
        );
    }
}