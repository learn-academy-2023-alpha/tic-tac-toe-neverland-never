import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
      // Create a state to track the gameboard
      const [squares, setSquares] = useState(Array(9).fill(null))

      // Create a state to track the current player
      const [player, setPlayer] = useState("❌")

      const processClick= (index) => {
            // Create a temporary copy of the gameboard
            let tempArray = [...squares]

            // Update the gameboard with the new click
            tempArray[index] = player
            setSquares(tempArray)

            // Change player to the alternative
            if ("❌" === player){
                  setPlayer("⭕️")
            } else {
                  setPlayer("❌")
            }
      }
  return (
    <>
      <div className='header'>
            <h1>Neverland Never</h1>
            <h2>Player: {player}</h2>
      </div>
      <div className='gameboard'>
            {squares.map((value, index) => <Square show={value} key={index} index={index} processClick={processClick}/>)}  
      </div>
    </>
  )
}

export default App