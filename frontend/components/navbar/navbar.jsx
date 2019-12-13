import React from 'react';
import GreetingContainer from "../greeting_bar/greeting_container";
import TildaLogo from '../session_form/tildalogo';
import NavList from './navlist'
import PlaylistIndexContainer from './playlist_index_container';
import { ProtectedRoute } from '../../util/route_util';

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