import React from 'react'
import { Link, Route } from "react-router-dom";

export const Nested = ({ match }) => {
    return(
        <div>

            <ul className="nested-nav">
                <li>
                    <Link exact to={`${match.url}`}> Nested Home </Link>
                </li>
                <li>
                    <Link to={`${match.url}/child/1`}> Child 1 </Link>
                </li>
                <li>
                    <Link to={`${match.url}/child/2`}> Child 2 </Link>
                </li>
                <li>
                    <Link to={`${match.url}/child/3`}> Child 3 </Link>
                </li>
            </ul>
            
            <h2>
                This is the Nested Component
            </h2>

            <Route path={`${match.url}/child/:id`} component={Child}/>
            <Route exact path={match.url} render={() => (
                <div className="nested-child">
                    Please select a topic.
                </div>
            )}/>
        </div>

    )
}

const Child= ({ match }) => {
    const ID = Number(match.params.id);    
    if([1, 2 , 3].indexOf(ID)  === -1 ){
        return  <div className="nested-child"> Nothing found </div>;
    }
    return (
        <div className="nested-child">
            This is a Child {ID} element of nested element
        </div>
    );
}

export default Nested;