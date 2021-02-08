


const reducerAdded =(state = null,action) =>{
    let cart=[]
    if(action.arrayCart !=null){
    cart = action.arrayCart}
    switch(action.type)
    {
        case 'flight_selected':
            const check = cart.find(item => item.id === action.payload.id)
            if(!check)
            {
            cart.push(action.payload)
            return cart
            }
            else{return cart}
            break;
        default: return state;    
    }
    
}

export default reducerAdded