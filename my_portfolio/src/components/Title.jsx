import React from 'react'

export default function Title({name}) {
    const buttonStyle = {
        padding: '10px 50px',
        backgroundColor: 'transparent',
        color:'white',
        boxshadow: '2px 2px 2px pink'

    }
  return (
    <div><h1 className='Title-button' style={buttonStyle}>{name}</h1></div>
  )
}
