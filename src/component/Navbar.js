import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as TiIcons from "react-icons/ti"
import * as MdIcons from "react-icons/md"
import { Link, NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData'
import './Navbar.css';
import { IconContext } from 'react-icons'

function Navbar() {
    const [ sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color:"#fff"}}>
        <div className="navbar">
            <Link  to='#' className ='menu-bars'>
                <MdIcons.MdRestaurantMenu onClick={showSidebar} className="icon" />
            </Link>
           <div className="img">
            <NavLink to="/">
            <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350">
            </img>
            </NavLink>
           </div>
           <p>Contact: 1900909</p>
        </div> 
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineCloseCircle/>
                    </Link>
                </li>
                {SidebarData.map((item,index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}
export default Navbar
