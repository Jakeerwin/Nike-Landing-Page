import React from 'react'
import { headerLogo } from '../assets/icons';

const Nav = () => {
  return (
    <header>
      <nav>
        <a href='/'>
          src={headerLogo}
        </a>
      </nav>
    </header>
  )
}

export default Nav