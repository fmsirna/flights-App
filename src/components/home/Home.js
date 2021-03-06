import React, { useState,useEffect } from 'react';
import * as FcIcons from 'react-icons/fc';
import ListCard from './ListCard'
import {useSelector} from 'react-redux';


function Home() {  

  // to retrieve data from the redux store
  let flightData = useSelector(state => state.data)

  let [list, setList] = useState(flightData);
  let [filter, setFilter] = useState({tags:"",price:""})
  let [update, setUpdate] = useState(false);

  // to update the list passed by a prop after any change in filters/fligthData store
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
    // updates the filter array with the new value entered  
    setFilter({...filter,tags: e.target.value});
  }
  function handlePrice(e){
    // updates the filter array with the new value entered  
    setFilter({...filter,price: e.target.value });

  }
  // to refresh the List when clicked the add button in the card component to display the "added to cart" message
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