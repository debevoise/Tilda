import React from 'react';
import CreatePlaylist from './create_playlist_modal';
import Modal from '../modal/modal';

export default class CreatePlaylistButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false }
        this.closeModal = this.closeModal.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    showModal(e) {
        this.setState({ active: true });
    }

    closeModal(e) {
        e.stopPropagation();
        this.setState({ active: false })
    }

    render() {
        return (
            <div className='create-playlist' onClick={this.showModal}>
                <i className="material-icons">
                    add_box
                </i>
                <span>Create Playlist</span>
                <Modal active={this.state.active} handleClose={this.closeModal}>
                    <CreatePlaylist closeModal={this.closeModal} />
                </Modal>
            </div>
        )
    }
}