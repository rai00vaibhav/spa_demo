import React from 'react'
import {navigateToUrl} from 'single-spa'
const NavBar = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="/" onClick={navigateToUrl} className="brand-logo">single-spa React Nav</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/home" onClick={navigateToUrl}>React</a></li>
        
        <li><a href="/angularJS" onClick={navigateToUrl}>AngularJS</a></li>
      </ul>
    </div>
  </nav>
)
export default NavBar