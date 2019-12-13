import React from 'react';
import PlaylistIndexItem from './playlist_index_item';

export default class PlaylistIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAuthoredPlaylists()
        this.setState({})
    }

    render() {
        const indexLis = this.props.playlists.map((playlist, idx) => {
            return <PlaylistIndexItem playlist={playlist} key={idx}/>
        })

        return(
            <div className='playlist-index'>
                <h2>Playlists</h2>

                <ul className='scrollable'>
                    {indexLis}
                </ul>
            </div>
        )
    }
}