import React from 'react';
import {useDispatch} from 'react-redux';
import{addToCart} from '../../actions/addToCart.js';

 function Card( {info,refresh} ) {
  
  const dispatch = useDispatch();  

  function add(info){
    refresh()
    // to call the "addToCart" reducer ACTION and update the cartAdded Redux Store
    dispatch(addToCart(info))  
  }

  return (
    
    <div className="card">
      <div className='card-container'>
        <img src={info.photo} className='card-image' alt={info.tags} />
         {(info.cartAdded) && <div className='card-added' >Added, go to cart page</div>}
        <p className= 'card-country'> {info.country} </p>
        <p className= 'card-city'> {info.city} </p>        
        <p className='card-price'>{info.price} <span className='card-usd'>$USD</span> </p>
        <div className='card-time'>
            <p> From: {info.departure} </p>
            <p> To: {info.return} </p>
        </div>
        <button type="button" className='card-add' onClick={ () => add(info)} >ADD</button>
     </div>
    </div>
    
  );
}

export default Card