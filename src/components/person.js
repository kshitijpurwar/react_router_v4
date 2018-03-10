import React from 'react'

export const Person = ({ location }) => {
    const queryString = new URLSearchParams(location.search);
    return(
        <h1>
            My name is {queryString.get('firstname')} {queryString.get('lastname')} <br/> and I work as a {queryString.get('role')} at {queryString.get('at')}.
        </h1>
    )
}

export default Person