import React from 'react'
import Navigation from './Nav/Navigation'
import Profile from './Nav/Profile'

function Navbar() {
  return (
    <nav className='h-[3.75rem] flex items-center justify-between px-8'>
      <Navigation></Navigation>
      <Profile></Profile>
      
    </nav>
  )
}

export default Navbar
