import React from 'react'
import { Icon } from 'Icons'

function Search() {
  return (
    <div className="mr-auto ml-4 relative">
    <label htmlFor='search-input' className='text-black w-12 h-10 flex justify-center items-center absolute top-0 left-0'>
        <Icon name={"search"} size={24}></Icon>
    </label>
      <input id='search-input' className='h-10 pl-12 outline-none text-black bg-white rounded-3xl text-sm placeholder-black/50 w-[22.75rem] max-w-full' placeholder='Satançılar, şarkılar veya podcastler  '></input>
    </div>
  )
}

export default Search
