import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo.inline.svg'

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="brand header-brand">
          <h1 className="m-0">
            <Link to='/'>
              <Logo />
            </Link>
          </h1>
        </div>
      </div>
    </header>
  )
}

export default Header
