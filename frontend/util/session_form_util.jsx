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

const validName = name => {
    return (name.length > 0);
}

const validEmail = email => {
    //Source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
}

const validDay = day => {
    return (day <= 31 && day > 0);
}

const validMonth = month => {
    return (month <= 12 && month > 0);
};

const validYear = year => {
    const present = new Date();
    return (year >= 1900 && year < present.getFullYear())
}

const validGender = gender => {
    const genders = ['male', 'female', 'non-binary'];
    return genders.includes(gender)
}

const validPassword = password => {
    return (password.length >= 8)
}

export const isValidField = (field, value) => {
    switch (field) {
        case 'day':
            return validDay(value);
        case 'month':
            return validMonth(value);
        case 'year':
            return validYear(value);
        case 'email':
            return validEmail(value);
        case 'name':
            return validName(value);
        case 'password':
            return validPassword(value);
        case 'gender':
            return validGender(value);
    }
}

export const getErrorMessage = field => {
    switch (field) {
        case "day":
            return "Please enter a valid day of the month.";
        case "month":
            return "Please enter your birth month.";
        case "year":
            return "Please enter a valid year.";
        case "email":
            return "The email address you supplied is invalid.";
        case "name":
            return "What should we call you?";
        case "password":
            return "Enter a password to continue.";
        case "gender":
            return "Please indicate your gender.";
        }
    }