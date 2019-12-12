import React from 'react';
import { NavLink } from 'react-router-dom'

const PlaylistIndexItem = ({ playlist }) => {
    let { id, name } = playlist;
    
    return (
        <NavLink to={`/playlists/${id}`}>
            <li className='playlist-index-item'>
                <div className='playlist-name'>{name}</div>
            </li>
        </NavLink>
    )

}

export default PlaylistIndexItem;