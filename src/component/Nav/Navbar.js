import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as TiIcons from "react-icons/ti"
import * as MdIcons from "react-icons/md"
import { Link } from 'react-router-dom';
import { SidebarData } from '../Sidebar/SidebarData'
import Dropdown from '../DropMenuNav/Dropdown';
import '../Sidebar/Sidebar.css';
import { IconContext } from 'react-icons'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './NavbarElements'

function Navbar() {
    const [ sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };
    return (
        <>
        <Nav>
            <NavLink to='/'>
                <h1>Logo</h1>
            </NavLink>
            <Bars onClick={showSidebar}/>
            <NavMenu>
                <NavLink classname="nav-item"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave} to="/clothing" activeStyle>
                    CLOTHING
                    {dropdown && <Dropdown />}
                </NavLink>
                <NavLink to="/allitems" activeStyle>
                    ALL ITEMS
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    CONTACT
                </NavLink>
                <NavLink to="/about" activeStyle>
                    ABOUT
                </NavLink>
            </NavMenu>
            <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
        <IconContext.Provider value={{color:"#fff"}}>
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
    </Nav>
        </>
    )
}
export default Navbar
