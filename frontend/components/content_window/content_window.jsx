import React from 'react';
import GreetingContainer from '../greeting_bar/greeting_container'
import GreetingBar from '../greeting_bar/greeting_bar';
import { Link, Route, Switch } from 'react-router-dom';
import PlaylistContainer from './song_collection/playlist_container';


const ContentWindow = (props) => {
    debugger
    return (
      <section id="content-window">
        <GreetingBar />
        <Route path='/playlists/:id' component={PlaylistContainer}/>
      </section>
    );
}

export default ContentWindow;