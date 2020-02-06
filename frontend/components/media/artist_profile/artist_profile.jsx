import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import ArtistBio from './artist_bio';
import ArtistMusic from './artist_music';
import Loading from '../../loading/loading';

export default class ArtistProfile extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchArtist(id).then(pl => console.log(pl));
    }

    render() {
        const { 
            artist, 
            artistAlbums, 
            songs,
            playCollectionFromIdx } = this.props;

        if (!artist) return <Loading />;
        if (!artist.name) return <Loading />;

        const artistSongs = !artist.song_ids ? [] : artist.song_ids.map((id) => songs[id])

        return (
          <section className="artist-profile">
            <header>
              <h1>{artist.name}</h1>
              <div className="header-buttons">
                <button onClick={()=> playCollectionFromIdx(artistSongs, 0)}>Play</button>
                <button>Follow</button>
              </div>
              <ul className="content-nav-bar">
                <li>
                  <NavLink
                    exact
                    to={`/artists/${artist.id}`}
                    className="nav-select"
                  >
                    Overview
                    <hr />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/artists/${artist.id}/about`}
                    className="nav-select"
                  >
                    About
                    <hr />
                  </NavLink>
                </li>
              </ul>
            </header>
            <main>
              <Switch>
                <Route path="/artists/:id/about">
                  <ArtistBio bio={artist.biography} />
                </Route>
                <Route path="/artists/:id">
                  <ArtistMusic
                    albums={artistAlbums}
                    artist={artist}
                    songs={artistSongs}
                    playCollectionFromIdx={playCollectionFromIdx}
                  />
                </Route>
              </Switch>
            </main>
          </section>
        );
    }
}


