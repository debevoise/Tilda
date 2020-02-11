import React, { Component } from 'react';
import SongContainer from '../media/song/song_container';
import Loading from '../loading/loading';

export default class LikedSongs extends Component {
    componentDidMount() {
        this.props.fetchLikes();
    }

    playCollectionFromIdx(idx) {
        const { likes = [] } = this.props;
        // const songArray = collection.songIds.map(id => songs[id]);
        this.props.playCollectionFromIdx(likes, idx)
    }

    render() {
        let { likes, loaded } = this.props;

        if (!loaded) return <Loading />;
        if (likes.length === 0) return (
            <div className='like-collection empty'>
                <div className='no-likes'>
                    <h3>Nothing to see here...</h3>
                    <p>Like some songs to add them to your library!</p>
                </div>
            </div>
        )

        let songList = likes.map((like, index) => {
            return (
                <SongContainer
                    key={like.id}
                    authored={false}
                    playSong={() => this.playCollectionFromIdx(index)} 
                    song={like}
                />
            )
        })

        let numSongs = songList.length; 

        return (

                <div className='song-collection margin-right'>
                    <div className='collection-display'>
                        <img className="collection-img liked-songs-art" src="https://raw.githubusercontent.com/debevoise/debevoise.github.io/master/resources/heart.png" alt=""/>
                        
                        <h2 className='like-header'>Liked Songs</h2>
                        <button onClick={() => this.playCollectionFromIdx(0)}>Play</button>
                        <h3 className='song-count'>{numSongs} songs</h3>
                    </div>

                    <ul className='song-list'>
                        {songList}
                    </ul>
                </div>

        )
    }
}