import React from 'react'
import Footer from '../components/footer'

import '../styles/style.scss'

const Layout = ({children}) => {
  return (
    <div className='body-wrap boxed-container'>
      <main>
        <div className='container'>
          { children }
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
