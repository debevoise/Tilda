import React from 'react';
import { Link } from 'react-router-dom';
import OptionsDropdown from '../../options_dropdown/options_dropdown';
import Modal from '../../modal/modal';
import AddToPlaylist from '../playlist/add_to_playlist_container';

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
        const optionXY = { x: e.pageX - 200, y: e.pageY }
        e.preventDefault();
        e.stopPropagation();
        this.setState({ optionXY })
    }

    closeDropdown(e) {
        e.stopPropagation();
        this.setState({ optionXY: null })
    }

    showModal(e) {
        this.setState({ modalActive: true, optionXY: null });
    }

    closeModal(e) {
        e.stopPropagation();
        this.setState({ modalActive: false })
    }

    render() {
        const {song} = this.props;
        let { album, albumId, artist, artistId } = song;
        let albumInfo = null;
        if (typeof album !== 'undefined') {
            albumInfo = <>
                <span className="second-line-separator">•</span>
                <Link className='song-album' to={`/albums/${albumId}`}>{album}</Link>
            </>
        }
        return (
            <li className='song' onContextMenu={this.showDropdown}>
                <div className='song-first-row'>
                    <div className='song-title'>{song.title}</div>
                    <i 
                        className="material-icons song-options"
                        onClick={this.showDropdown}>more_horiz</i>
                    <div className='song-timestamp'>6:66</div>
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
                        <li>
                            Add to liked songs
                        </li>
                        <li>
                            Do absolutely nothing
                        </li>
                </OptionsDropdown>
                <Modal active={this.state.modalActive} handleClose={this.closeModal}>
                    <AddToPlaylist />
                </Modal>
                
                
            </li>
        )
    }
}

