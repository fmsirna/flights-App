import React, {Fragment, useState,useEffect } from 'react';
import * as FcIcons from 'react-icons/fc';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import ListCard from './ListCard'
import {useSelector} from 'react-redux';


function Home() {  

  // to retrieve data from the redux store
  let flightData = useSelector(state => state.data)
  
  let [list, setList] = useState(flightData);
  let [filter, setFilter] = useState({tags:"",price:"",fromDate: new Date(),toDate:`12/31/${new Date().getFullYear()+1}`} )
  let [update, setUpdate] = useState(false);

  // to update the list passed by a prop after any change in filters/fligthData store
  useEffect(() => {        
    let newList = flightData.filter((item) => {return( 
      item.tags.includes(`${filter.tags.toLowerCase()}`) // includes the tag searched
      && new Date(item.departure).getTime() > new Date(filter.fromDate).getTime()   //filter by dates
      && new Date(item.departure).getTime() < new Date(filter.toDate).getTime() )}) //filter by dates
   
    if(filter.price >0) 
    {
      let newList2= newList.filter((item) => {return( item.price <= filter.price)})
      newList = newList2;
    }  
    newList.sort(sortCompare)    //to sort by departure date

    setList(newList);  
  }, [filter,flightData,update]);

  // to refresh the List when clicked the add button in the card component to display the "added to cart" message
  function refresh(){
    setUpdate(!update)
  }


  //Filters click handelers functions, once clicked, will update the filter state with those values

  function handleFilter(e){      
    let value= e.target.value    
    setFilter({...filter, [e.target.name]: value});        
  } 

  function handleFromDate(e){      
    let d =new Date(e) 
    let DateConverted = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`    
    setFilter({...filter, fromDate: DateConverted});           
  }
  function handleToDate(e){      
    let d =new Date(e) 
    let DateConverted = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`    
    setFilter({...filter, toDate: DateConverted});           
  }

  // to sort by departure date
  function sortCompare( a, b ) {
    if ( a.departure < b.departure ){
      return -1;
    }
    if ( a.departure > b.departure ){
      return 1;
    }
    return 0;
  }
  
  return (
    <>
    <div className="lookUp-container">
      <div className="lookUp">
        <input className="imput-lookup" value={filter.tags} name="tags" type="text" placeholder="Find Your Destination" onChange={handleFilter}></input>
        <button className="btn-lookup" value={filter.tags}  onClick={handleFilter}><FcIcons.FcSearch size={30}/></button>      
      </div>
    </div>
    <div className='filter-container'>
        <div className="price-lookup">
            <p className="price-n">Price lower than:</p>
            <input  type="text" name="price" onChange={handleFilter} placeholder='Max price'></input>
        </div>
        <div  className="dates-container">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker className="dates-field"
              clearable
              value={filter.fromDate}
              label="From"
              name="fromDate"
              onChange={handleFromDate}
              minDate={new Date()}
              format="MM/dd/yyyy"
              />
              <DatePicker className="dates-field"
              clearable
              value={filter.toDate}
              label="To"
              name="toDate"
              onChange={handleToDate}
              minDate={filter.fromDate}
              format="MM/dd/yyyy"
              />
            </MuiPickersUtilsProvider>
        </div>

    </div>    
    
    <ListCard refresh={refresh} cards={list} />
    </>
  );
}

export default Home;