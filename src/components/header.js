import React from 'react'
import logo from '../logo.svg';
import { withRouter } from 'react-router-dom';

const Header = ({ location}) => {
    return(
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title"> React Router V4 Practice</h1>
                <h3>Current Path is 
                    <span className="path"> {location.pathname} </span>
                </h3>
            </header>
        </div>
    )
}

export default withRouter(Header);