import React, { Component } from 'react';

export default class ArtistProfile extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchArtist(id);
    }

    render() {
        debugger

        return null;
    }
}


