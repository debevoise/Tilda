import React from 'react';
import { addSongToPlaylist } from '../../../actions/music_actions';
import { connect } from 'react-router-dom'
import { defaultCipherList } from 'constants';


const PlaylistAddItem = ({ playlist, songId }) => {
    let { id, name, songIds } = playlist;
    let count = songIds.length
    let songCount = count === 1 ? count + ' Song' : count + ' Songs'
    return (

            <li className='playlist-index-item'>
                <div className='playlist-name'>{name}</div>
                <div className='song-count'>{songCount}</div>
            </li>

    )

}

const mdp = dispatch => ({
    addSongToPlaylist: (playlistId, songId) => dispatch(addSongToPlaylist(playlistId, songId))
})

const PlaylistModalItemContainer = connect(null, mdp)(PlaylistModalItem);
export default PlaylistModalItemContainer;


