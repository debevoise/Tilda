import React from 'react';

export const EmailTakenError = ({errors}) => {
    if (errors.includes('Email has already been taken')) {
        return <div className='error-message'>This email has already been accounted for.</div>
    }
    return null;
}

