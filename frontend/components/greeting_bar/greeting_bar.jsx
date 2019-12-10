import React from 'react';
import NavArrows from './nav_arrows';
import GreetingContainer from './greeting_container';

const GreetingBar = props => {
    return (
        <header className='greeting-bar'>
            <NavArrows />
            <GreetingContainer />
        </header>
    )
}

export default GreetingBar;