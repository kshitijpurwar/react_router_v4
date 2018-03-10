import React from 'react'

export const Post = ({ match, location, history }) => {
    console.log("Match is ", match);
    console.log("Location is ", location);
    console.log("History is ", history);

    return(
        <div className="post">
            Post Id is : {match.params.id} 
            <br/>
            Post path is : {match.path}             
            <br/>
            Location key is : {location.key}
        </div>
    )
}

export default Post