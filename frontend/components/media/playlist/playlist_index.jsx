import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import CreatePlaylistButton from '../../navbar/create_playlist_button';

export default class PlaylistIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAuthoredPlaylists();
        this.setState({})
    }

    render() {
        let indexLis;
        if (this.props.modal) {
            let {songId} = this.props;
            indexLis = this.props.playlists.map((playlist, idx) => {
                return <PlaylistIndexItem playlist={playlist} key={idx} songId={songId} />
            })
        } else {
            indexLis = this.props.playlists.map((playlist, idx) => {
                return <PlaylistIndexItem playlist={playlist} key={idx} />
            })
        }
        
        const header = this.props.modal ? null : (
            <>
            <h2>Playlists</h2>
            <CreatePlaylistButton />
            </>
        )
        return(
            <div className='playlist-index'>
                {header}
                <ul className='scrollable'>
                    {indexLis}
                </ul>
            </div>
        )
    }
}