import React, { useState,useEffect } from 'react';
import * as FcIcons from 'react-icons/fc';
import ListCard from './ListCard'

import {useSelector} from 'react-redux';




function Home() {  

  let flightData = useSelector(state => state.data)
  let [list, setList] = useState(flightData);
  let [filter, setFilter] = useState({tags:"",price:""})
  let [update, setUpdate] = useState(false);
  useEffect(() => {    
    let newList = flightData.filter((item) => {return( item.tags.includes(`${filter.tags.toLowerCase()}`))})
    if(filter.price >0)
    {
      let newList2= newList.filter((item) => {return( item.price <= filter.price)})
      newList = newList2;
    }  
    setList(newList);  
  }, [filter,flightData,update]);


  function handleFilter(e){    
    setFilter({...filter,tags: e.target.value});
  }
  function handlePrice(e){
    setFilter({...filter,price: e.target.value });

  }
  function refresh(){
   setUpdate(!update)
  }

  return (
    <>
    <div className="lookUp-container">
      <div className="lookUp">
        <input className="imput-lookup" value={filter.tags} type="text" placeholder="Find Your Destination" onChange={handleFilter}></input>
        <button className="btn-lookup" value={filter.tags}  onClick={handleFilter}><FcIcons.FcSearch size={30}/></button>      
      </div>
    </div>
    <div className='price-container'>
        <div className="price-lookup">
            <p className="price-n">Price lower than:</p>
            <input  value= {filter.price}  type="text" onChange={handlePrice} placeholder='Max price'></input>
        </div>
    </div>
    <ListCard refresh={refresh} cards={list} />
    </>
  );
}



export default Home;