import React, { useRef } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import OutsideClick from "./OutsideClick";
import './Navbar.css';

function Navbar() {  
  const inputRef = useRef(null)
  const inputRef2 = useRef(null)
 
  OutsideClick(inputRef,inputRef2, () => {
    inputRef.current.className = 'hide'
  }); 

  function showSidebar (){            
    inputRef.current.className = 'nav-menu'
  }  
  function closeSidebar (){            
    inputRef.current.className = 'hide'
  }  

  return (
    <>     
        <div className='navbar' > 
        <div className='logo' >
        <img src={'/images/avion.jpg'}   className='icon' alt='icon' ></img> <h4>American Flights </h4> 
        </div>          
          <Link to='#' className='menu-bars' ref={inputRef2}>
            <FaIcons.FaBars  onClick={showSidebar} />
          </Link>                  
             <nav ref={inputRef} className= 'hide'>
                <div className='nav-menu-items'>
                  <span className='navbar-cross'>
                      <Link to='#' className='menu-bars cross' onClick={closeSidebar}>
                      <AiIcons.AiOutlineClose />
                      </Link>
                  </span>
                  <ul className='links'>
                  {SidebarData.map((item, index) => {
                      return (
                      <li key={index} className= 'nav-text'>
                          <Link to={item.path} className= 'nav-links'>
                          <span>{item.title}</span> 
                          {item.icon}                     
                          </Link>
                      </li>
                      );
                  })}
                  </ul>
                </div>           
                </nav> 
        </div>  
        
    </>
  );
}

export default Navbar;