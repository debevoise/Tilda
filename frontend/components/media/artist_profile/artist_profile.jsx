import React from 'react';

export default class ArtistProfile extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchArtist(id).then(pl => console.log(pl));

    }

    render() {
        const { artist } = this.props;

        if (!artist) return null;


        return (
            <div>
                Hello artist {artist.name}
            </div>
        );
    }
}


