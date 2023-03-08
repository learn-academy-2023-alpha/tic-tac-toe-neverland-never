import React from 'react'

const Square = ({show, index, processClick}) => {
      return (
      <div className="square" onClick={() => processClick(index)}> 
            {show}
      </div>
      )
}
export default Square
