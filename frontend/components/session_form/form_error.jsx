import React from 'react';
import { getErrorMessage, isValidField } from '../../util/session_form_util'

const FormError = ({ field, state }) => {
    const value = state[field];
    const blurred = (typeof state.fieldErrors[field] === 'boolean');
    
    if (isValidField(field, value) || !blurred) return null;
    return (
        <div className='error-message'>
            {getErrorMessage(field)}
        </div>
    )
}   

export default FormError;







