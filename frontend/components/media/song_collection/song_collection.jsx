import React from 'react';
import SongContainer from '../song/song_container';

export default class SongCollection extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchCollection(id);

    }

    componentDidUpdate(prevProps) {
        const { id } = this.props.match.params
        const { url } = this.props.match;
        const prevUrl = prevProps.match.url;
        if (url !== prevUrl) {
            this.props.fetchCollection(id);
        }
    }

    render() {
        const { songs, collection } = this.props;
        if (typeof collection.songIds === 'undefined') { 
            return null; 
        }
        const songList = collection.songIds.map((id, key) => {
            if (typeof songs[id] === 'undefined') return null;
            return <SongContainer key={key} song={songs[id]}/>;
        })
     
        return (
            <div className='song-collection'>
                
                
                <ul className='song-list'>
                    {songList}
                </ul>
            </div>
        )
    }
}