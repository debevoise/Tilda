import React, { Component } from 'react';
import Loading from '../loading/loading';
import MusicCard from '../media/music_card/music_card'

export default class Collection extends Component {
    componentDidMount() {
        this.props.fetchLikes();
    }

    renderEmpty() {
        let { type } = this.props;
        let verb = (type === 'artist') ? 'Follow' : 'Like'

        return (
            <div className='like-collection empty'>
                <div className='no-likes'>
                    <h3>Nothing to see here...</h3>
                    <p>{verb} some {type}s to add them to your library!</p>
                </div>
            </div>
        )
    }
    
    render() {
        const { loaded, likes, header, type } = this.props;
        if (!loaded) return <Loading/>;
        if (likes.length === 0) return this.renderEmpty()


        let likeCards = likes.map(like => {
            return <MusicCard key={like.id} cardtype={type} musicItem={like} owner={like.owner}/>
        })
        
        return (
            <div className='like-collection'>
                <h2>{header}</h2>
                <ul>
                    {likeCards}
                </ul>
            </div>
        );
    }
}