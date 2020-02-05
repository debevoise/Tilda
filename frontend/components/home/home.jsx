import React, { Component } from 'react';
import Loading from '../loading/loading';

export default class Home extends Component {
    componentDidMount() {
        const {home, fetchHome} = this.props;

        if (!home) {
            fetchHome();
        }
    }
    
    render() {
        return <Loading />

        if (!this.props.home) return <Loading />;

        return (
            <div className='content'>
                <main>
                    <h1>Discover New Music</h1>
                    <h2>Artist</h2>
                    <h2>Playlists</h2>
                    <h2>Albums</h2>
                </main>
            </div>
        );
    }
}