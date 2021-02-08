import React, { useState,useEffect } from 'react';
import * as FcIcons from 'react-icons/fc';
import ListCard from './ListCard'

import {useSelector} from 'react-redux';




function Home() {  

  let flightData = useSelector(state => state.data)
  let [list, setList] = useState(flightData);
  let [filter, setFilter] = useState({tags:"",price:0})
  let [update, setUpdate] = useState(false);
  useEffect(() => {    
    const newList = flightData.filter((item) => {return( item.tags.includes(`${filter.tags.toLowerCase()}`))}
      );
      
    setList(newList);  
  }, [filter,flightData,update]);


  function handleFilter(e){
    
    setFilter( {tags: e.currentTarget.value})

  }
 
  function refresh(){
   setUpdate(!update)
  }

  return (
    <>
    <div className="lookUp">
      <input className="imput-lookup" value={filter.tags} type="text" placeholder="Find Your Destination" onChange={handleFilter}></input>
      <button className="btn-lookup" value={filter.tags} onClick={handleFilter}><FcIcons.FcSearch size={30}/></button>      
    </div>
    <ListCard refresh={refresh} cards={list} />
    </>
  );
}



export default Home;