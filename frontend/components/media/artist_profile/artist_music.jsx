import React from 'react';
import { Link } from 'react-router-dom';


const ArtistMusic = ({ songs, albums, artist, playCollectionFromIdx }) => {    
    let songList = !songs ? null : songs.map((song, idx) => {
        const {length} = song;        
        let seconds = length % 60;
        if (seconds < 10) seconds = "0" + seconds;
        let time = Math.floor(length / 60) + ":" + seconds; 

        return (
          <li
            key={song.id}
            className="song"
            onDoubleClick={() => playCollectionFromIdx(songs, idx)}
          >
            <div className="song-left">
              <i className="material-icons inactive">music_note</i>
              <i className="material-icons active">play_arrow</i>
              <img
                src={song.artwork}
                alt="album artwork"
                className="song-art"
              />
              <span>{song.title}</span>
            </div>
            <div className="song-right">
              <span>{time}</span>
            </div>
          </li>
        );
    })

    let albumList = !albums ? null : albums.map(album => {
        return (
          <li key={album.id} className="album">
            <Link to={`/albums/${album.id}`} className="album-link">
              <img
                src={album.artwork}
                alt="album artwork"
                className="album-artwork"
              />
              <div className="play-overlay">
                <i className="material-icons">
                    play_circle_outline
                </i>
              </div>
              <footer>{album.title}</footer>
            </Link>
            <div className="artist-name">{artist.name}</div>
          </li>
        );
    })

    return (
        <div className='artist-music'>
            <section className='artist-songs'>
                <h2>Discover</h2>
                <ul className='discover-songs'>
                    {songList}
                </ul>
            </section>

            <section className='artist-albums'>
                <h2>Albums</h2>
                <ul className='albums-list'>
                    {albumList}
                </ul>
            </section>
        </div>
        
    )
}

export default ArtistMusic;