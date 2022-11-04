import React from 'react'
import Illustration from './../../assets/illustration-devices.svg'

function Home() {
  return (
    <main>
      <header>
          <div className="background_illustration"></div>
          <div className="container">
            <div className="illustration">
              <img src={Illustration} alt="devices" />
            </div>
            <div className="text">
              <div className="notification">
                <span>New</span>
                <p>Monograph Dashboard</p>
              </div>
              <h1>Powerful insights<br/> into your team</h1>
              <p>Project planning and time tracking<br/> for agile teams</p>
              <div className="btns">
                <button className='btn-wb'>Schedule a demo</button>
                <button className='btn-wob'>to see a live preview</button>
              </div>
            </div>
          </div>
      </header>
    </main>
  )
}

export default Home