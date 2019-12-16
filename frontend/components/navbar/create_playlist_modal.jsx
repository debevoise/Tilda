import React from 'react';
import { createPlaylist } from '../../actions/music_actions';
import { connect } from 'react-redux';

class CreatePlaylistModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "" }

        this.closeModal = this.closeModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateName = this.updateName.bind(this);
    }

    componentWillUnmount() {
        this.setState({ name: '' })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPlaylist(this.state).then(() => this.props.closeModal(e));
    }

    closeModal(e) {
        this.props.closeModal(e);
    }

    updateName(e) {
        const name = e.currentTarget.value;
        this.setState({ name });
    }

    render() {
        
        return (
            <div className='create-playlist-modal'> 
                <h1>Create new playlist</h1>
                <form className='create-playlist-form' onSubmit={this.handleSubmit}>
                    <label>Playlist Name
                        <input 
                            value={this.state.name}
                            onChange={this.updateName}
                            type="text" 
                            className='playlist-name'
                            placeholder='New Playlist'/>
                    </label>
                </form>
                <div className='button-footer'>
                    <button className='cancel-button' onClick={this.closeModal}>Cancel</button>
                    <button onClick={this.handleSubmit}>Create</button>
                </div>

            </div>
        )
    }
}

const mdp = dispatch => ({
    createPlaylist: playlist => dispatch(createPlaylist(playlist))
})

export default connect(null, mdp)(CreatePlaylistModal)