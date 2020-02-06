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

        const { artists, albums, playlists, home } = this.props; 
        debugger
        let artistCards = artists.map(artist => {
            return <MusicCard cardtype='artist' key={artist.id} musicItem={artist}/>
        });

        let playlistCards = playlists.map(playlist => {
          return (
            <MusicCard cardtype="playlist" key={playlist.id} musicItem={playlist} />
          );
        });

        return (
            <div className='content'>
                <main>
                    <h1>Discover New Music</h1>
                    <h2>Artists</h2>
                    <ul>{artistCards}</ul>
                    <h2>Playlists</h2>
                    <h2>Albums</h2>
                </main>
            </div>
        );
    }
}