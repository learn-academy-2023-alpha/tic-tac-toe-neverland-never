import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
      // Create a state to track the gameboard
      const [squares, setSquares] = useState(Array(9).fill(null))

      // Create a state to track victory conditions
      // This state is an array of arrays, with each internal array reflecting the indexes of a win option
      const [victory, setVictory] = useState([
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [6, 4, 2],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
      ])

      // Create a state to track the current player
      const [player, setPlayer] = useState("❌")

      // Create a state to track the score
      const [score, setScore] = useState([0,0])

      // Create a state to activate an alert if game is over
          const [active, setActive] = useState(true)
          
      const processClick= (index) => {
            // Confirm that click is legal
            if (!squares[index] && active){

            // Create a temporary copy of the gameboard
            let tempArray = [...squares]

            // Update the gameboard with the new click
            tempArray[index] = player
            setSquares(tempArray)

            // Check to see if victory conditions are fulfilled
            // Filtering the victory array to test if any victory conditions are met
            // For each victory condition, filter the subarray to determine if the value in squares state at that index is equal to the current player
            // When three elements in a given victory condition match the current player, then that player has won
            // Provide alert message upon victory
            // Update the scoreboard
            if(0 < victory.filter((value) => 3 === value.filter(vIndex => tempArray[vIndex] === player).length).length){
                  alert(`${player} has won the game!`)
                  let tempScore = score
                  if("❌" === player){
                        tempScore[0] += 1
                  }else{
                        tempScore[1] += 1
                  }
                  setScore(tempScore)

                  setActive (false)

            }

            // Change player to the alternative
            if ("❌" === player){
                  setPlayer("⭕️")
            } else {
                  setPlayer("❌")
            }}
      }
  return (
    <>
      <div className='header'>
            <h1>Neverland Never</h1>
            <h2>Player: {player}</h2>
            <h2>Scoreboard:</h2>
            <div className="scoreBoard">
                  <h3>❌ : {score[0]}</h3>
                  <h3>⭕️ : {score[1]}</h3>
            </div>
      </div>
      <div className='gameboard'>
            {squares.map((value, index) => <Square show={value} key={index} index={index} processClick={processClick}/>)}  
      </div>
    </>
  )
}

export default App