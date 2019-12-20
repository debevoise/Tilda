import React from 'react';
import {Switch, Redirect, Link, NavLink, Route} from 'react-router-dom'

export default class CollectionsIndex extends React.Component {

    render() {
        return (
          <section>
            <NavLink to="/collections/playlists">Playlists</NavLink>
            <NavLink to="/collections/artists">Artists</NavLink>
            <NavLink to="/collections/albums">Albums</NavLink>
            <NavLink to="/collections/songs">Liked Songs</NavLink>
            <Redirect from="/collections/" to="/collections/playlists" />
            <Switch>
              <Route path="collections/playlists">Playlists</Route>
              <Route path="collections/artists">Artists</Route>
              <Route path="collections/albums">Albums</Route>
              <Route path="collections/songs">Liked Songs</Route>
            </Switch>
          </section>
        );
    }
}