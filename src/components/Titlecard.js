import React from 'react'

function Titlecard(props) {
    var color = props.color
    return(
        <p className='titlecard' style={{'color':color}} id='h2Text'>{props.title}</p>
    )
}
export default Titlecard