import React from 'react'
import Navigation from './Nav/Navigation'
import Profile from './Nav/Profile'
import { useLocation } from "react-router-dom"

function Navbar() {
  const searchRoute = useLocation();
  return (
    <nav className='h-[3.75rem] flex items-center justify-between px-8 text-white'>
      <Navigation></Navigation>
      {searchRoute.pathname == "/search" && (
        <div>search ekranı</div>
      )}
      <Profile></Profile>
      
    </nav>
  )
}

export default Navbar
