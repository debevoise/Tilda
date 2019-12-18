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
                to={`/artist/${song.artistId}`}
                className='now-playing-artist'>song.artist</Link>
        </div>
    )
}