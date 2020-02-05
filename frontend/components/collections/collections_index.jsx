import React from 'react';
import {Switch, Redirect, Link, NavLink, Route} from 'react-router-dom'

export default class CollectionsIndex extends React.Component {

    render() {
        return (
          <div className='content'>
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
                <Route path="collections/playlists">Playlists</Route>
                <Route path="collections/artists">Artists</Route>
                <Route path="collections/albums">Albums</Route>
                <Route path="collections/songs">Liked Songs</Route>
              </Switch>
            </section>
          </div>
        );
    }
}