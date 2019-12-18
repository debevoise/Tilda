import React from 'react';
import {Link} from 'react-router-dom'

const AudioControlsLeft = (props) => {

    // TODO: Attach album artwork
    const { song } = props;
    if (!song) return (
        <div className='ac-left'>
            
        </div>
    )

    return (
        <div className='ac-left'>
            <Link
                to={`/albums/${song.albumId}`}
                className='now-playing-artist'>{song.title}</Link>
            <Link 
                to={`/artists/${song.artistId}`}
                className='now-playing-artist'>{song.artist}</Link>
        </div>
    )
}

export default AudioControlsLeft;