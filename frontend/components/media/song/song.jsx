import React from 'react';

export default class Song extends React.Component { 
    constructor(props) {
        super(props);
        this.type = 'Song';
    }

    // album_id: 78
    // id: 461
    // title: "A Passage to India"
    render() {
        const {song} = this.props;
        let { album } = song;
        let albumInfo = null;
        if (typeof album !== 'undefined') {
            albumInfo = <>
                <span class="second-line-separator">•</span>
                <a className='song-album'>{album}</a>
            </>
        }
        return (
            <li className='song'>
                <div className='song-first-row'>
                    <div className='song-title'>{song.title}</div>
                    <i class="material-icons song-options">more_horiz</i>
                    <div className='song-timestamp'>6:66</div>
                </div>
                <div className='song-second-row'>
                    <a className='song-artist'>{song.artist}</a>
                    {albumInfo}
                </div>

                
                {/* <div className='song-options'>...</div> */}
                
            </li>
        )
    }
}

