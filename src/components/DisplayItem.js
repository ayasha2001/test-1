import React from 'react'
import "./DisplayItem.css"

const DisplayItem = ({name,age,college}) => {
  return (
    <div className='diplayed-list-item'>
        <p>{name} {age +" years old"} {"studies in " +college} </p>
    </div>
  )
}

export default DisplayItem