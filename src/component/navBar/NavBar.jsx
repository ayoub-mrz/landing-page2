import React, { useState, useEffect } from 'react'
import Logo from './../../assets/logo.svg'
import Hamburger from './../../assets/icon-hamburger.svg'
import Close from './../../assets/icon-close.svg'

function NavBar() {

  let [navigationShow, setNavigationShow] = useState(false);

  let [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    })
  }, [windowWidth])

  function toggleNav() {
    if (!navigationShow) {
      setNavigationShow(prev => !prev);
      setTimeout(() => {
        document.querySelector('.Navigation_Container ul').classList.toggle('hide')
      }, 100);
    } else {
      document.querySelector('.Navigation_Container ul').classList.toggle('hide')
      setTimeout(() => {
        setNavigationShow(prev => !prev);
      }, 500);
    }
  }

  return (
    <nav>
      <div className="container">
        <a href="/" className="logo"><img src={Logo} alt='logo'/></a>
        {windowWidth < 576 ?
        <div className="Navigation_Container">
          <div className="navigation_switch" onClick={() => {toggleNav()}}>
            {navigationShow ? 
              <img src={Close} alt="close" />
            : <img src={Hamburger} alt="hamburger" />}
          </div>
          {navigationShow ?
          <ul className='mobile hide'>
            <li><a href="/">Product</a></li>
            <li><a href="/">Features</a></li>
            <li><a href="/">Pricing</a></li>
            <button>Login</button>
          </ul>
          : null}
        </div>
        : 
        <ul className='desktop'>
            <li><a href="/">Product</a></li>
            <li><a href="/">Features</a></li>
            <li><a href="/">Pricing</a></li>
            <button>Login</button>
        </ul>
        }
      </div>
    </nav>
  )
}

export default NavBar