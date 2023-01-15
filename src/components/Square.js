import React from 'react'

function Square({clickedArray, handleClick}) {
  return (
    <div className='board'>
      {clickedArray.map((item,index) => {
        if(item === "") { //If item is empty then we will be able to click it
            return (
                <div key={index} className='square' onClick={() => handleClick(index)}>
                    {/* () => handleClick(index) --> passing index to handleClick function */}
                    {item}
                </div>
            )
        }
        else {
            return (
                <div key={index} className='square clicked'>
                    {item}
                </div>
            )
        }
      })}
    </div>
  )
}

export default Square
