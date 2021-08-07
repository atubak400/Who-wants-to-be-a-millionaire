import React from 'react'

export default function Trivia() {
  return (
    <div className='trivia'>
      <div className='question'>What's the shortest month of the year</div>
      <div className='answers'>
        <div className='answer'>January</div>
        <div className='answer correct'>February</div>
        <div className='answer wrong'>August</div>
        <div className='answer'>April</div>
      </div>
    </div>
  )
}
