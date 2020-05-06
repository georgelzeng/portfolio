import React from 'react';

function ColoredLine (props) {
    return(
        <hr
        style={{
            color: props.color,
            backgroundColor: props.color,
            height: props.height,
            width: props.width, 
            margin: 0
        }}
    />
    )

};

export default ColoredLine;