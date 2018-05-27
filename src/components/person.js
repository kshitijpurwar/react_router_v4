import React from 'react'

export const Person = ({ location }) => {
    const queryString = new URLSearchParams(location.search);
    let string = `My name is ${queryString.get('firstname')} ${queryString.get('lastname')}`;
    if(queryString.get('role')){
        string = `${string} and I work as a ${queryString.get('role')}`;
    }
    if(queryString.get('at')){
        string = `${string} at ${queryString.get('at')}.`;
    }
    return(
        <h1>{string}</h1>
    )
}

export default Person