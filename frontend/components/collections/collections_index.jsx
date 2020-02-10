import React from 'react';
import {Switch, Redirect, Link, NavLink, Route} from 'react-router-dom'
import PlaylistCollectionContainer from './playlist_collection_container';
import ArtistCollectionContainer from './artist_collection_container';
import AlbumCollectionContainer from './album_collection_container';
import LikedSongsContainer from './liked_songs_container';
import { ProtectedRoute, SignupRoute } from '../../util/route_util';

export default class CollectionsIndex extends React.Component {

    render() {
        return (
          <div className='content no-margin-right'>
            <section>
              <ul className='content-nav-bar'>
                <li>
                <NavLink to="/collections/playlists">
                    Playlists
                    <hr />
                </NavLink>
                </li>
                <li>
                <NavLink to="/collections/artists">
                    Artists
                    <hr />
                </NavLink>
                </li>
                <li>
                <NavLink to="/collections/albums">
                    Albums
                    <hr />
                </NavLink>
                </li>
                <li>
                <NavLink to="/collections/songs">
                    Liked Songs
                    <hr />
                </NavLink>
                </li>
              </ul>
              
              <Redirect from="/collections/" to="/collections/playlists" />

              <Switch>
                <SignupRoute path="/collections/playlists" component={PlaylistCollectionContainer}/>
                <SignupRoute path="/collections/artists" component={ArtistCollectionContainer}/>
                <SignupRoute path="/collections/albums" component={AlbumCollectionContainer}/>
                <SignupRoute path="/collections/songs" component={LikedSongsContainer}/>
              </Switch>
            </section>
          </div>
        );
    }
}