import React from 'react';

function ColoredLine (props) {
    return(
        <hr
        style={{
            color: props.color,
            backgroundColor: props.color,
            height: props.height,
            width: props.width
        }}
    />
    )

};

export default ColoredLine;