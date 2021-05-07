import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const MenuDrop = [
    {
        title: 'TEE',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'JACKET',
        path: '/clothing',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'PANTS',
        path: '/allitems',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },
    {
        title: 'ACCESSORIES',
        path: '/accessories',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    {
        title: 'HOODIE',
        path: '/about',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'nav-text'
    }
]