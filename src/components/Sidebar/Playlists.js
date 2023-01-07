import React from 'react'
import { Link } from "react-router-dom";

function Playlists() {
  return (
    <nav className='mx-6 mt-4 py-2 flex-auto border-t border-white border-opacity-10 overflow-auto text-white'>
     {new Array(50).fill(
       <Link className='text-s text-link hover:text-white flex h-8 items-center'>
       Playlist
     </Link>
     )}
    </nav>
  )
}

export default Playlists
