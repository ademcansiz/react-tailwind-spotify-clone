import React from 'react'
import logo from   "img/logo.svg"
import Menu from './Sidebar/Menu'
import { Link } from "react-router-dom";
import { Icon } from 'Icons';
import Playlists from './Sidebar/Playlists';
import Download from './Sidebar/Download';

function SibeBar() {
  return (
        <aside className='w-60 pt-6 flex flex-col bg-black flex-shrink-0'>
            <a className='mb-7 px-6'>
            <img src={logo} className="h-10"></img>
            </a>
            <Menu> </Menu>
            <nav className='mt-6'>
              <Link className='py-2 px-6 flex  items-center group text-sm text-link font-semibold hover:text-white'>
                <span className='w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 rounded-sm text-black group-hover:bg-opacity-100'>
                  <Icon name={"plus"}></Icon>
                </span>
                Çalma Listesi Oluştur
              </Link>
          
              <Link className='py-2 px-6 flex items-center group  text-sm text-link font-semibold hover:text-white'>
                <span className='w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-b from-violet-700 to-violet-400 text-white rounded-sm opacity-70 group-hover:bg-opacity-100'>
                  <Icon name={"fav"} size={12} ></Icon>
                </span>
                Beğenilen Şarkılar
              </Link>       
            </nav>

            <Playlists></Playlists>
            <Download></Download>
        </aside>

  )
}

export default SibeBar
