import React from 'react';
import {Link} from 'react-router-dom'

const AudioControlsLeft = (props) => {

    // TODO: Attach album artwork
    const { song } = props;
    if (!song) return (
        <div className='ac-left'>
            
        </div>
    )
    
    const image = song.artwork ? <img className='now-playing-artwork' src={song.artwork}></img> : null;

    return (
        <div className='ac-left'>
            {image}
            <div className='now-playing-links'>

                <Link
                    to={`/albums/${song.albumId}`}
                    className='now-playing-song'>{song.title}</Link>
                <Link 
                    to={`/artists/${song.artistId}`}
                    className='now-playing-artist'>{song.artist}</Link>
            </div>
        </div>
    )
}

export default AudioControlsLeft;