import React from 'react'
import { Icon } from 'Icons'
import { useNavigate } from 'react-router-dom'

function Navigation() {
    const navigate = useNavigate();
  return (
    <nav className='flex items-center gap-x-2'>
        <button onClick={() => navigate(-1)} className='text-white w-8 h-8 flex items-center justify-center rounded-full bg-black opacity-70'>
            <Icon name={"left"} size={"22"} ></Icon>
        </button>
        <button onClick={() => navigate(1)} className='text-white w-8 h-8 flex items-center justify-center rounded-full bg-black opacity-70'>
            <Icon name={"right"} size={"22"}></Icon>
        </button>
    </nav>
  )
}

export default Navigation
