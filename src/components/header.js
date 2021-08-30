import React from 'react'
import Logo from '../images/logo.inline.svg'

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="brand header-brand">
          <h1 className="m-0">
            <a href="#">
              <Logo />
            </a>
          </h1>
        </div>
      </div>
    </header>
  )
}

export default Header
