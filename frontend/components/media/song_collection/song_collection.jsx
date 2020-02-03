import React from 'react';
import SongContainer from '../song/song_container';
import { generateGradient } from '../../../util/color_util';

export default class SongCollection extends React.Component {
    constructor(props) {

        super(props);
        this.style = {
          backgroundImage: generateGradient()
        };
    }
    
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchCollection(id);
        this.playCollectionFromIdx = this.playCollectionFromIdx.bind(this)
    }

    componentDidUpdate(prevProps) {
        const { id } = this.props.match.params
        const { url } = this.props.match;
        const prevUrl = prevProps.match.url;
        if (url !== prevUrl) {
            this.props.fetchCollection(id);
            this.style = {
              backgroundImage: generateGradient()
            };
        }
    }

    playCollectionFromIdx(idx) {
        const { collection, songs } = this.props;
        const songArray = collection.songIds.map(id => songs[id]);
        this.props.playCollectionFromIdx(songArray, idx)
    }

    render() {
        const { songs, collection, authored } = this.props;
        if (typeof collection.songIds === 'undefined') { 
            return null; 
        }
        const songList = collection.songIds.map((id, index) => {
            if (typeof songs[id] === 'undefined') return null;

            return <SongContainer 
                key={index} 
                authored={authored}
                song={songs[id]}
                playSong={() => this.playCollectionFromIdx(index)}/> 
        })
        const numSongs = songList.length;
        const nameHeader = collection.name || collection.title;
        

        const artwork = collection.artwork ? (
          <img className="collection-img" src={collection.artwork} alt="" />
        ) : (
          <div className="collection-art" style={this.style}></div>
        );
        return (
            <div className='content'>            
                <div className='song-collection'>
                    <div className='collection-display'>
                        {artwork}
                        <h2>{nameHeader}</h2>
                        <button onClick={() => this.playCollectionFromIdx(0)}>Play</button>
                        <h3 className='song-count'>{numSongs} songs</h3>
                        <div className='like-collection'>
                            <i className="material-icons">
                                favorite
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
            </div>
        )
    }
}