import React, { Fragment } from 'react'
import { Menu } from '@headlessui/react'
import { Icon } from 'Icons'

function Profile() {
  const user = {
    name : "Adem",
    avatar : "https://i.scdn.co/image/ab6775700000ee85e568e13008a25984fec63fc4"
  }
  return (
    <Menu as={"nav"} className="relative text-white z-10">
      {({open})=>(
          <>
              <Menu.Button className={`flex items-center h-8 rounded-3xl  text-white pr-2 hover:bg-active ${open ? "bg-active" :"bg-black" } `}> 
              
                <img src={user.avatar} className="w-8 h-8 rounded-full p-px mr-2"></img>
                <span className='text-sm font-semibold mr-1'>{user.name}</span>
                <span className={`${open &&  "rotate-180"}`}>
                  <Icon name={"down"} size={"16"}></Icon>
                </span>
              </Menu.Button>
              <Menu.Items className={"absolute top-full right-0 w-48 bg-active rounded translate-y-2 p-1"}>
                <Menu.Item>
                  {({ active }) => (
                    <a
                       className={`${active ? 'bg-[#ffffff1a] bg-opacity-5 text-gray' : 'text-white'} group flex w-full items-center justify-between rounded-md px-2 py-2 text-sm ` } href="#"
                    >
                     Hesap
                     <Icon name ="hesap" size={"16"}></Icon>
                    </a>
                   
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <a
                       className={`${active ? 'bg-[#ffffff1a] bg-opacity-5 text-gray' : 'text-white'} group flex w-full items-center justify-between rounded-md px-2 py-2 text-sm ` } href="#"
                    >
                     Profil
                    </a>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <a
                       className={`${active ? 'bg-[#ffffff1a] bg-opacity-5 text-gray' : 'text-white'} group flex w-full items-center justify-between rounded-md px-2 py-2 text-sm ` } href="#"
                    >
                     Oturumu Kapat
                    </a>
                  )}
                </Menu.Item>
            </Menu.Items>
          </> 
      )}
      
  </Menu>
  )
}

export default Profile
