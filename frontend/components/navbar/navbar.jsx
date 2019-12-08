import React from 'react';
import GreetingContainer from "../greeting/greeting_container";

const NavBar = (props) => {
    return (
        <nav id="nav-bar">
            <GreetingContainer />
        </nav>
    );
}

export default NavBar;