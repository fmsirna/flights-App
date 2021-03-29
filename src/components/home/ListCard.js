import * as RiIcons from 'react-icons/ri';
import React, {useRef} from 'react';
import  Card  from './Card.js';

export default function ListCards({ cards,refresh }) {
  const ref = useRef(null)

  function scrollLeft(){   
    ref.current.scrollLeft -= 350
  }
  function scrollRight(){    
    ref.current.scrollLeft += 350
  } 


  return (
    <>
    {cards.length > 0 ?
    <div className='list-container'>
       <RiIcons.RiArrowLeftSFill className='list-btn' onClick={scrollLeft} />       
      <div ref={ref} className="list"> 
        {                      
            cards.map((item) =>  <Card key={item.tags} info={item} refresh={refresh} />)           
        }
      </div>      
      <RiIcons.RiArrowRightSFill className='list-btn' onClick={scrollRight} />       
    </div>
    : <div  className='cart-noFound'>No flights available with those parameters</div>}
   
    </>
  );
}
