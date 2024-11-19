import React from 'react'
const Buttons = ({label, onClick,}) => {
   
    const divStyle = {
        color: 'white',
        backgroundColor: '#E431B8',
        fontsize: '8px',
        borderRadius: '10px',
        boxshadow: '0 0 10px',
        width:'70px',
        padding:'10PX',
        left: '0',
        cursor: 'pointer',

    }

  return (
    <button  className='button' style={divStyle}  onClick = {onClick} >{label}</button>
  )
}
//export buttons as  a component not a s a funtion
export default Buttons;
