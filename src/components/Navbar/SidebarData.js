import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome style={{ stroke: "black", strokeWidth: "15"}}/>,    
  },
  {
    title: 'Cart',
    path: '/cart',
    icon: <FaIcons.FaCartPlus style={{ stroke: "black", strokeWidth: "10"}}/>,    
  },
  {
    title: 'About us',
    path: '/aboutus',
    icon: <IoIcons.IoMdHelpCircle style={{ stroke: "black", strokeWidth: "10"}}/>,    
  }
]