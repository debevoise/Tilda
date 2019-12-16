import React from 'react';
import GreetingContainer from "../greeting_bar/greeting_container";
import TildaLogo from '../session_form/tildalogo';
import NavList from './navlist'

import { ProtectedRoute } from '../../util/route_util';
import PlaylistNavContainer from '../media/playlist/playlist_nav_container';

const NavBar = (props) => {
    return (
        <nav id="nav-bar">
            <TildaLogo />
            <NavList />
            <ProtectedRoute to='/' component={PlaylistNavContainer}/>
            
        </nav>
    );
}

export default NavBar;