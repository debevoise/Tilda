import React from 'react';
import { Link } from 'react-router-dom';
import OptionsDropdown from '../../options_dropdown/options_dropdown';
import Modal from '../../modal/modal';
import PlaylistAddContainer from '../playlist/playlist_add_container';


export default class Song extends React.Component { 
    constructor(props) {
        super(props);
        this.type = 'Song';
        this.state = { optionXY: null, modalActive: false }

        this.closeDropdown = this.closeDropdown.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
        this.showModal = this.showModal.bind(this)
        this.closeModal = this.closeModal.bind(this)

    }

    showDropdown(e) {
        if (this.props.authored === false) return;
        const optionXY = { x: e.pageX - 200, y: e.pageY }
        e.preventDefault();
        // e.stopPropagation();
        this.setState({ optionXY });
    }

    closeDropdown(e) {
        // e.stopPropagation();
        this.setState({ optionXY: null });
    }

    showModal(e) {
        this.setState({ modalActive: true, optionXY: null });
    }

    closeModal(e) {
        e.stopPropagation();
        this.setState({ modalActive: false })
    }

    render() {
        const {song, authored, removeSongFromPlaylist } = this.props;
        let { album, albumId, artist, artistId, length, id } = song;
        let albumInfo = null;
        let seconds = length % 60;
        if (seconds < 10) seconds = '0' + seconds;
        let time = Math.floor(length / 60) + ":" + seconds; 
        
        let removeOption = (typeof authored === 'number') ? (
            <li onClick={
                (e) => removeSongFromPlaylist(authored, id)
                    .then(() => this.closeDropdown(e))}>
                Remove song from this playlist
            </li>
        ) : null

        if (typeof album !== 'undefined') {
            albumInfo = <>
                <span className="second-line-separator">•</span>
                <Link className='song-album' to={`/albums/${albumId}`}>{album}</Link>
            </>
        }

        return (
            <li className='song' 
                onDoubleClick={() => this.props.playSong(song)}
                onContextMenu={this.showDropdown}>
                <div className='song-first-row'>
                    <div className='song-title'>{song.title}</div>
                    <i 
                        className="material-icons song-options"
                        onClick={this.showDropdown}>more_horiz</i>
                    <div className='song-timestamp'>{time}</div>
                </div>
                <div className='song-second-row'>
                    <Link className='song-artist' to={`/artists/${artistId}`}>
                        {artist}
                    </Link>
                    {albumInfo}
                </div>
                <OptionsDropdown 
                    position={this.state.optionXY} 
                    handleClose={this.closeDropdown}>
                        <li onClick={this.showModal}>
                            Add song to playlist
                        </li>
                        {removeOption}
                        <li>
                            Add to liked songs
                        </li>
                        <li>
                            Do absolutely nothing
                        </li>
                </OptionsDropdown>
                <Modal active={this.state.modalActive} handleClose={this.closeModal}>
                    <PlaylistAddContainer closeModal={this.closeModal} songId={id} />
                </Modal>
                
                
            </li>
        )
    }
}

