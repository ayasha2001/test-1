import React from 'react'
import "./DisplayItem.css"

const DisplayItem = ({name,age}) => {
  return (
    <div className='diplayed-list-item'>
        <p>{name} {age +" years old"} </p>
    </div>
  )
}

export default DisplayItem