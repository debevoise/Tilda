import React from 'react';
import SongContainer from '../song/song_container';
import { generateGradient } from '../../../util/color_util';
import { Link } from 'react-router-dom';

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
        if (collection.songIds.length === 0) return;
        const songArray = collection.songIds.map(id => songs[id]);
        this.props.playCollectionFromIdx(songArray, idx)
    }

    renderArtistLink() {
        const {type, owner} = this.props;

        let innerHtml = type === 'Playlist' ? 'Playlist' : (
            <Link to={`/artists/${owner.id}`}>{owner.name}</Link>
        )
        return <h3 className='collection-owner'>{innerHtml}</h3>
    }

    renderLikeButton() {
        const { like, liked, collection } = this.props;
        
        return (
            <div className='like-icon'>
                <i className={`material-icons like`} onClick={() => like(collection.id)}>
                    {liked ? "favorite" : "favorite_border"}
                </i>
            </div>
        )
    }

    render() {
        const { songs, collection, authored, owner, type  } = this.props;

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
                        {this.renderArtistLink()}
                        <button onClick={() => this.playCollectionFromIdx(0)}>Play</button>
                        <h3 className='song-count'>{numSongs} songs</h3>
                        <div className='like-collection'>
                        {this.renderLikeButton()}
                            {/* <i className="material-icons">
                                more_horiz
                            </i> */}
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