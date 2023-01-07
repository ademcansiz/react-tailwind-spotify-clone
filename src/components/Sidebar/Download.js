import React from 'react'
import { Icon } from 'Icons'
import { Link } from 'react-router-dom'
function Download() {
  return (
    <Link className='h-10 flex flex-shrink-0 text-sm font-semibold text-white px-6 gap-x-4 items-center '>
      <Icon name={"download"} size={20} ></Icon>
      Uygulamayı Yükle
    </Link>
  )
}

export default Download
