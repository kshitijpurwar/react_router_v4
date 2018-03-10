import React from 'react'
import { withRouter } from 'react-router-dom';

const Color = (props) => {
    
    const style = {
        background: props.color || props.match.params.hex || props.match.params.bgColor ,
        width: '400px',
        height: '400px',
        margin: 'auto',
        lineHeight: '400px',
        color: props.match.params.textColor || '#fff',
        fontSize: '36px',
        textTransform: 'Capitalize'
    };

    return(
        <div style={style}>
            {props.text || props.match.params.hex || "Box" }
        </div>
    )
}

// withrouter is HOC made available by the react-router
// this allows the component to use match in props 
// when using 'render' prop in the Route component
export default withRouter(Color);