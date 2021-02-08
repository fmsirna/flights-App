


const reducerAdded =(state = [],action) =>{
    
    switch(action.type)
    {
        case 'flight_Add':            
            const check = state.find(item => item.id === action.payload.id)
            if(!check)
            {               
                state.push(action.payload)
            return state
            }
            else{return state}
            break;
        case 'flight_Remove':
           
            const element = state.find(item => item.id === action.payload.id)
            if(element)
            {       
            let index = state.indexOf(element)
            state.splice(index,1)            
            return state
            }
            else{return state}
            break;    

        default: return state;    
    }
    
}

export default reducerAdded