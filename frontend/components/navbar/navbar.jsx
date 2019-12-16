import React from 'react';
import GreetingContainer from "../greeting_bar/greeting_container";
import TildaLogo from '../session_form/tildalogo';
import NavList from './navlist'

import { ProtectedRoute } from '../../util/route_util';
import PlaylistIndexContainer from '../media/playlist/playlist_index_container';

const NavBar = (props) => {
    return (
        <nav id="nav-bar">
            <TildaLogo />
            <NavList />
            <ProtectedRoute to='/' component={PlaylistIndexContainer}/>
            
        </nav>
    );
}

export default NavBar;