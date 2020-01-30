import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

export default class ArtistProfile extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchArtist(id).then(pl => console.log(pl));

    }

    render() {
        const { artist } = this.props;

        if (!artist) return null;


        return (
            <section className='artist-profile'>
                <header>
                    <h1>{artist.name}</h1>
                    <div className='header-buttons'>
                        <button>Play</button>
                        <button>Follow</button>
                    </div>
                    <nav className='artist-nav'>
                        <ul>
                            <NavLink exact to={`/artists/${artist.id}`} >
                                <li className='nav-select'>
                                    Overview
                                </li>
                            </NavLink>
                            <NavLink to={`/artists/${artist.id}/about`} className='nav-select'>
                                <li >
                                    About
                                </li>
                            </NavLink>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Switch>
                        <Route path='/artists/:id/about'>
                            <ArtistBio />
                        </Route>
                        <Route path='/artists/:id'>

                        </Route>
                    </Switch>
                </main>
            </section>
        );
    }
}


