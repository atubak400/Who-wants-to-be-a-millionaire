import React from 'react'
import './app.css'

function App() {
  return (
    <div className='app'>
      <div className='main'>main</div>
      <div className='pyramid'>
        <div className='moneyList'>
          <div className='moneyListItem active'>
            <span className='moneyListItemNumber'>4</span>
            <span className='moneyListItemAmount'>$ 400</span>
          </div>
          <div className='moneyListItem'>
            <span className='moneyListItemNumber'>4</span>
            <span className='moneyListItemAmount'>$ 400</span>
          </div>
          <div className='moneyListItem'>
            <span className='moneyListItemNumber'>4</span>
            <span className='moneyListItemAmount'>$ 400</span>
          </div>
          <div className='moneyListItem'>
            <span className='moneyListItemNumber'>4</span>
            <span className='moneyListItemAmount'>$ 400</span>
          </div>
          <div className='moneyListItem'>
            <span className='moneyListItemNumber'>4</span>
            <span className='moneyListItemAmount'>$ 400</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
