import { Icon } from 'Icons'
import * as React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
    let activeStyle = {
        backgroundColor: "rgba(40,40,40)",

      };

  return (
        <nav>
            <ul className='flex flex-col'>
                <li>
                    <NavLink style={({ isActive }) =>
                                      isActive ? activeStyle : undefined
                                   } 
                             to={"/"} className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded'>
                       <span>
                          <Icon name="home"></Icon>
                       </span>
                        Ana sayfa
                    
                    </NavLink>
               
                </li>
                <li>
                    <NavLink style={({ isActive }) =>
                                      isActive ? activeStyle : undefined
                                   }  to={"/search"}  className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded'>
                        <span>
                             <Icon name="search"></Icon>
                        </span>
                        Ara
                    </NavLink>
                </li>
                <li>
                    <NavLink style={({ isActive }) =>
                                      isActive ? activeStyle : undefined
                                   }  to={"/books"}  className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded'>
                       <span>
                          <Icon name="books"></Icon>
                       </span>
                        Kitaplığın
                    </NavLink>
                </li>
            </ul>
        </nav>

  )
}

export default Menu
