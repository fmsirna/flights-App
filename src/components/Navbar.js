import React, { useState,useEffect,useRef } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const inputRef = useRef(null)
 
  useEffect(() => {    
    document.addEventListener("click", outsideClick)    
    return () => {
      document.removeEventListener("click", outsideClick);
    };
    });

  function outsideClick(e) {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setSidebar(!sidebar)
    }  
  }  
  function showSidebar (){            
    setSidebar(!sidebar)
  }  

  return (
    <>     
        <div className='navbar' > 
        <div className='logo' >
        <img src={'/images/avion.jpg'}   className='icon' alt='icon' ></img> <h4>American Flights </h4> 
        </div>          
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars  onClick={showSidebar} />
          </Link>                  
             <nav ref={inputRef} className={sidebar ? 'nav-menu' : 'hide'}>
                <div className='nav-menu-items'>
                  <span className='navbar-cross'>
                      <Link to='#' className='menu-bars cross' onClick={showSidebar}>
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