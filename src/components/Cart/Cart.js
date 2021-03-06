import React, { useState,useEffect } from 'react';
import './Cart.css';
import * as tiIcons from 'react-icons/ti';
import {useSelector,useDispatch} from 'react-redux';
import{RemoveItem} from '../../actions/removeItem.js';


function Cart() {   
   var cart = useSelector(state => state.addedFlight)
   let [total, setTotal] = useState(0);
   let [refresh, setRefresh] = useState(true);
   const dispatch = useDispatch();

  useEffect(() => {  
    if (cart.length > 0)  {
     let sum = cart.reduce(function(prev, cur) {
      return prev + cur.price;
    }, 0);
    setTotal(sum)        
    }
    else{}
  }, [cart,refresh]);

function remove(item){  
  dispatch(RemoveItem(item))
  setRefresh(!refresh)
}



  return (
    <>
    {cart.length > 0  ?     
    <div className='cart-container' >      
       {  cart.map( (item)=>
       <div className='cart-item-container' key={item.tags}>
          <div className='cart-item' >
              <img src={item.photo} className='cart-image' alt={item.tags} />
              <p className='cart-city'>{item.city} </p>
              <div className='cart-price'>US$ {item.price} <tiIcons.TiDelete onClick={() => remove(item)} className={'cart-delete'}/> </div>                   
          </div> 
          <div className='cart-lines'> </div>    
       </div> )}
       <div className='cart-purchase'> 
              <p className='cart-price'>Total:  US$ {total}</p>
              <button type="button" className='cart-btn' >BUY</button>
       </div>
    </div>      
    :<div className='cart-noFound'>No Flights added to the cart</div>    } 
    </>
  );
}



export default Cart;