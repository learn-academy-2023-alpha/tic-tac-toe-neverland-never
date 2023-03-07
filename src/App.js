import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
      // Create a state to track the gameboard
      const [squares, setSquares] = useState(Array(9).fill(null))

      const processClick= () => {
        alert("click detected")
      }
  return (
    <>
      <div className='header'>
            <h1>Neverland Never</h1>
      </div>
      <div className='gameboard'>
            {squares.map((value, index) => <Square show={value} key={index} processClick={processClick}/>)}  
            {/*   index={index} */}
      </div>
    </>
  )
}

export default App