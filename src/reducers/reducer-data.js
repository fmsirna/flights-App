import {flightData} from '../components/Data.js';


export default function(state = flightData,action){
switch(action.type)
    {
        case 'flight_Add':           
            let element = state.find(item => item.id === action.payload.id)
            if(element)
            {
              let index = state.indexOf(element)
              state[index].cartAdded = true            
            return state 
            }
            else{return state}
            break;
        case 'flight_Remove':           
            let card = state.find(item => item.id === action.payload.id)
            if(card)
            {
              let index = state.indexOf(card)
              state[index].cartAdded = false                          
            return state 
            }
            else{return state}
            break;     
        default: return state;    
    }

}