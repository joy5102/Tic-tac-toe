import React, {useState} from 'react'
import Square from './Square'
import EndGame from './EndGame'

const initial = ""
const x_player = "X"
const o_player = "O"
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function Tictactoe() {
    const [grid, setGrid] = useState(Array(9).fill(initial))
    const [player, setPlayer] = useState(false)
    const [gameFinished, setGameFinished] = useState(false)
    const [draw, setDraw] = useState(false)
    function handleClick(idx) {
      setGrid(
        grid.map((item,index) => {
          if(index === idx) {
            if(player) {
              return x_player
            }
            else {
              return o_player
            }
          }
          else {
            return item
          }          
        })
      )
      setPlayer(!player)
    }
    function isGameOver() {
      if(!gameFinished) {
        //check for draw game
        if(!grid.includes(initial)) {
          setDraw(true)
          setGameFinished(true)
          console.log('draw')
        }
        //X win check
        for(let i = 0; i < 8; i++) {
          if(grid[winCombinations[i][0]] === x_player && grid[winCombinations[i][1]] === x_player && grid[winCombinations[i][2]] === x_player) {
            setGameFinished(true)
            console.log('X won')
            return;
          }
        }
        //O win check
        for(let i = 0; i < 8; i++) {
          if(grid[winCombinations[i][0]] === o_player && grid[winCombinations[i][1]] === o_player && grid[winCombinations[i][2]] === o_player) {
            setGameFinished(true)
            console.log('O won')
            return;
          }
        }
      }
    }
    function restartGame() {
      setGrid(Array(9).fill(initial))
      setGameFinished(false)
      setDraw(false)
    }
    isGameOver()
  return (
    <div>
      {gameFinished && <EndGame restartGame={restartGame} player={player} draw={draw}/>}
      <Square clickedArray={grid} handleClick={handleClick}/>
    </div>
  )
}

export default Tictactoe
