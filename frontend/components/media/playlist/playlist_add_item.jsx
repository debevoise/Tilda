import React from 'react';
import { addSongToPlaylist } from '../../../actions/music_actions';
import { connect } from 'react-redux'



const PlaylistAddItem = (props) => {
    let { playlist, songId } = props;
    let { id, name, songIds } = playlist;
    let count = songIds.length
    let songCount = count === 1 ? count + ' Song' : count + ' Songs';
    if (typeof id === 'undefined') {
        console.log(playlist);
        return null;
    }

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        props.addSongToPlaylist(id, songId).then(() => props.closeModal(e))
    }

    return (
        <li className='playlist-index-item' onClick={handleClick.bind(this)}>
            <div className='playlist-art'>
                <i className="material-icons">
                music_note
                </i>
            </div>
            <div>
                <div className='playlist-name'>{name}</div>
                <div className='song-count'>{songCount}</div>
            </div>
        </li>

    )

}

const mdp = dispatch => ({
    addSongToPlaylist: (playlistId, songId) => dispatch(addSongToPlaylist(playlistId, songId))
})

export default connect(null, mdp)(PlaylistAddItem);


