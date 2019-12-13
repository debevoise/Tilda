import React from 'react';

export default class CreatePlaylistButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false }
    }

    showModal() {
        this.setState({ show: true })
    }

    hideModal() {
        this.setState({ show: false })
    }

    render() {
        return (
            <button className='create-playlist'>
                <i className="material-icons">
                    add_box
                </i>
                <span>Create Playlist</span>
            </button>
        )
    }

}