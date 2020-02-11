import React from 'react';
import { NavLink } from 'react-router-dom';

class NavList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className='nav-list'>
                <NavLink exact to='/'>
                    <li className='home-link'>
                        <div>
                            <i className="material-icons">home</i>
                            <span>Home</span>
                        </div>    
                    </li>
                </NavLink>
                <NavLink to='/search'>
                    <li className='search-link'>
                        <div>
                            <i className="material-icons">search</i>
                            <span>Search</span>
                        </div>   
                    </li>
                </NavLink>
                <NavLink to='/collections/'>
                    <li className='library-link'>
                        <div>
                            <i className="material-icons">library_books</i>
                            <span>Your Library</span>
                        </div>
                    </li>
                </NavLink>
            </ul>
        )
    }
}

export default NavList;