import React from 'react'

function EndGame({restartGame, player, draw}) {
  return (
    <div className='end-game-screen'>
        {!draw && <span className='win-message'>{player ? "O WON" : "X WON"}</span>}
        {draw && <span className='win-message'>GAME DRAW</span>}
      <button className="btn" onClick={restartGame}>
        RESTART GAME
      </button>
    </div>
  )
}

export default EndGame
