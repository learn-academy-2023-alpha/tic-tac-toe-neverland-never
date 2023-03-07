import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
      // Create a state to track the gameboard
      const [squares, setSquares] = useState(Array(9).fill(null))

  return (
    <>
      <div className='header'>
            <h1>Neverland Never</h1>
      </div>
      <div className='gameboard'>
            {squares.map((value, index) => <Square />)}
            {/*  show={value} key={index} index={index} processClick={processClick}/>)} */}
      </div>
    </>
  )
}

export default App