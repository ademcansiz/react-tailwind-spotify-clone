import React from 'react'
import { Menu } from '@headlessui/react'
import { Icon } from 'Icons'

function Profile() {
  const user = {
    name : "Adem",
    avatar : "https://i.scdn.co/image/ab6775700000ee85e568e13008a25984fec63fc4"
  }
  return (
    <Menu as={"nav"} className="relative">
    <Menu.Button className={"flex items-center h-8 rounded-3xl bg-red-400 text-white pr-2 hover:bg-active"}>
      <img src={user.avatar} className="w-8 h-8 rounded-full p-px mr-2"></img>
      <span className='text-sm font-semibold mr-1'>{user.name}</span>
      <Icon name={"down"} size={"16"}></Icon>
    </Menu.Button>
    <Menu.Items className={"absolute top-full right-0 w-48 bg-active rounded translate-y-2"}>
      <Menu.Item>
        {({ active }) => (
          <a
            className={`${active && 'bg-blue-500'}`}
            href="/account-settings"
          >
            Account settings
          </a>
        )}
      </Menu.Item>
    </Menu.Items>
  </Menu>
  )
}

export default Profile
