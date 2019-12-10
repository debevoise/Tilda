import React from 'react';

export const formatState = (state) => {
    const newState = Object.assign({}, state);
    newState.email = newState.email.toLowerCase();
    if (typeof state.month !== 'undefined') {
        let {day, month, year} = newState;
        if (day.length === 1) day = '0' + day; 
        const birth_date = [day, month, year].join("/");
        delete newState.day;
        delete newState.month;
        delete newState.year;
        newState.birth_date = birth_date;
    }

    return newState
}



const validEmail = email => {
    //Source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
}

const validDay = day => {
    return (day <= 31 && day > 0);
}

const validYear = year => {
    const present = new Date();
    return (year >= 1900 && year < present.getFullYear())
}

const validPassword = password => {
    return (password.length >= 8)
}

export const validateSignup = state => {};

export const validateLogin = state => {};