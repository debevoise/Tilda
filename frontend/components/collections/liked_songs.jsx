import React, { Component } from 'react';
import SongContainer from '../media/song/song_container';

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
        let { likes = [] } = this.props;

        let songList = likes.map((like) => {
            return <SongContainer
                authored={false}
            />
        })

        return (
            <div className='content'>
                <div className='song-collection'>
                    <div className='collection-display'>
                        {artwork}
                        <h2>{nameHeader}</h2>
                        {/* {this.renderArtistLink()} */}
                        <button onClick={() => this.playCollectionFromIdx(0)}>Play</button>
                        {/* <h3 className='song-count'>{numSongs} songs</h3> */}
                    </div>

                    <ul className='song-list'>
                        {songList}
                    </ul>
                </div>
            </div>
        )
    }
}