import React, { useState,useEffect } from 'react';
import {useSelector} from 'react-redux';



function Cart() {
  
  const cart = useSelector(state => state.addedFlight)
  const [total, setTotal] = useState(0);

  useEffect(() => {  
    if (cart !=null)  {
     let sum = cart.reduce(function(prev, cur) {
      return prev + cur.price;
    }, 0);
    setTotal(sum)     
    }
    else{console.log('hola')}
  }, [cart]);

  return (
    <>
    <div className='cart-container' >       
      
       { (cart != null)  && cart.map( (item)=>
       <div className='cart-item-container' key={item.tags}>
         <div className='cart-item' >
              <img src={item.photo} className='cart-image' alt={item.tags} />
              <p className='cart-city'>{item.city} </p>
              <p className='cart-price'>{item.price} </p>                   
          </div> 
          <div className='cart-lines'> <div className='cart-line'></div><div className='cart-line'></div><div className='cart-line'></div></div>    
        </div> )}
    </div>
       <p className='cart-price'>Total = {total}</p>
    <button type="button" className='cart-btn' >BUY</button>
    </>
  );
}



export default Cart;