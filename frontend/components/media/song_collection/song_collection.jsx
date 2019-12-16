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
        const numSongs = songList.length;
        const nameHeader = collection.name || collection.title;
     
        return (
            <div className='song-collection'>
                <div className='collection-display'>
                    <div className='collection-art'></div>
                    <h2>{nameHeader}</h2>
                    <button>Play</button>
                    <h3 className='song-count'>{numSongs} songs</h3>
                    <div className='like-collection'>
                        <i className="material-icons">
                            favorite
                        </i>
                        <i className="material-icons">
                            favorite_border
                        </i>
                        <i className="material-icons">
                            more_horiz
                        </i>
                    </div>
                </div>
                
                <ul className='song-list'>
                    {songList}
                </ul>
            </div>
        )
    }
}