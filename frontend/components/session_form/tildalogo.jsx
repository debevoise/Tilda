import React from 'react';
import { Link } from 'react-router-dom';

const TildaLogo = (props) => {
    return (
        <Link to="/" className='tilda-logo'>
            <div>TILDA~</div>
        </Link>
    )
}

export default TildaLogo;