import React from 'react'
import { Link } from "react-router-dom";

const Links = [
    { to: '/', name: 'Home' },

    { to: `/${Math.ceil(Math.random()*1000000)}`, name: 'Random' },

    { to: '/post/3', name: 'Post 3' },
    { to: '/post/8', name: 'Post 8' },

    { to: '/red', name: 'Red' },
    { to: '/green', name: 'Green' },
    { to: '/blue', name: 'Blue' },

    { to: '/color/cyan', name: 'Cyan' },
    { to: '/color/salmon', name: 'Salmon' },
    { to: '/color/pink', name: 'Pink' },
    { to: '/color/grey', name: 'Grey' },


    { to: '/colorbox/blue/yellow', name: 'Blue on Yellow' },
    { to: '/colorbox/white/black', name: 'White on Black' },
    { to: '/colorbox/red/pink', name: 'Red on Pink' },

    { to: '/person?firstname=Kshitij&lastname=Purwar&role=frontend Engineer', name: 'Kshitij Purwar' },
    { to: '/person?firstname=Paul&lastname=Smith&role=backend&at=Google', name: 'Paul Smith' },

    { to: '/legacy', name: 'Broken legacy link'  },
    
    { to: '/404', name: '404 Not found' },
    { to: '/nested', name: 'Nested Routing' }


]

export const Sidebar = (props) => {
    return(
        <div className="sidebar">
            {Links.map( ({ to, name }) => <Link to={to} className="link"> {name} </Link> )}
        </div>
    )
}

export default Sidebar