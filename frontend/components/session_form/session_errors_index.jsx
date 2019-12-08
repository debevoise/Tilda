import React from 'react';

const SessionErrorsIndex = ({ errors }) => {    
    if (errors.length === 0) return null;
    
    const errorsList = errors.map((err, idx) => (
        <li key={idx}>{err}</li>
    ))
    
    return(
        <ul className='errors-list'>
            {errorsList}
        </ul>
    )
}

export default SessionErrorsIndex;