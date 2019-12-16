import React from 'react';
import GreetingContainer from '../greeting_bar/greeting_container'
import GreetingBar from '../greeting_bar/greeting_bar';
import { Link, Route, Switch } from 'react-router-dom';
import PlaylistContainer from '../media/song_collection/playlist_container';
import AlbumContainer from '../media/song_collection/album_container';



const ContentWindow = (props) => {
    return (
      <section id="content-window">
        <GreetingBar />
        <div className='content'>
          <Route path='/playlists/:id' component={PlaylistContainer}/>
          <Route path='/albums/:id' component={AlbumContainer}/>
        </div>
      </section>
    );
}

export default ContentWindow;