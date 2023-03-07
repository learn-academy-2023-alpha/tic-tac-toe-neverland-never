import React from 'react'

const Square = ({show, processClick}) => {
  return (
    <div className="square" onClick= {() => processClick()}> 
      {show}
    </div>
  )
}
export default Square
