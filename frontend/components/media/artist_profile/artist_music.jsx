import React from 'react';
import { Link } from 'react-router-dom';


const ArtistMusic = ({ songs, albums, artist }) => {
    let songList = !songs ? null : songs.map((song) => {
        return ( 
            <li key={song.id} className='song'>
                {song.title}
            </li>
        )
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