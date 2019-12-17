import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import CreatePlaylistButton from '../../navbar/create_playlist_button';
import PlaylistAddItem from './playlist_add_item';

export default class PlaylistIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAuthoredPlaylists();
        // this.setState({})
    }

    

    //MUST MANUALLY PASS SONG ID THROUGH!!!!!!!
    render() {
        let indexLis;
        let { playlists, playlistIds, mode } = this.props;

        if (mode === 'addToPlaylist') {
            let {songId} = this.props;

            indexLis = playlistIds.map((playlistId, idx) => {
                let playlist = playlists[playlistId];
                if (typeof playlist === 'undefined') { return null }
                let { closeModal } = this.props;
                return <PlaylistAddItem 
                    playlist={playlist} 
                    key={idx}
                    songId={songId} 
                    closeModal={closeModal}
                    />
            })

        } else if (mode === 'navbar') {
            indexLis = playlistIds.map((playlistId, idx) => {
                let playlist = playlists[playlistId];
                
                if (typeof playlist === 'undefined') { return null }
                return <PlaylistIndexItem playlist={playlist} key={idx} />
            })
        }
        
        const header = (mode === 'navbar') ? (
            <>
            <h2>Playlists</h2>
            <CreatePlaylistButton />
            </>
        ) : null;

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