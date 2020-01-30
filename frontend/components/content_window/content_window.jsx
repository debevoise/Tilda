import React from 'react';
// import GreetingContainer from '../greeting_bar/greeting_container'
import GreetingBar from '../greeting_bar/greeting_bar';
import { Link, Route, Switch } from 'react-router-dom';
import PlaylistContainer from '../media/song_collection/playlist_container';
import AlbumContainer from '../media/song_collection/album_container';
import SearchResultsContainer from '../search/search_results_container';
import CollectionsIndex from '../collections/collections_index';
import ArtistContainer from '../media/artist_profile/artist_profile_container';



const ContentWindow = (props) => {
    return (
      <section id="content-window">
        <GreetingBar />

        <div className='content'>
          <Route path='/playlists/:id' component={PlaylistContainer}/>
          <Route path='/albums/:id' component={AlbumContainer}/>
          <Route path='/artists/:id' component={ArtistContainer}/>
          <Route path='/search' component={SearchResultsContainer} />
          <Route path='/collections' component={CollectionsIndex} />
        </div>
      </section>
    );
}

export default ContentWindow;