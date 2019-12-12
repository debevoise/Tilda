import React from 'react';
import GreetingContainer from "../greeting_bar/greeting_container";
import TildaLogo from '../session_form/tildalogo';
import NavList from './navlist'
import PlaylistIndex from './playlist_index';

const NavBar = (props) => {
    return (
        <nav id="nav-bar">
            <TildaLogo />
            <NavList />
            <PlaylistIndex/>
        </nav>
    );
}

export default NavBar;