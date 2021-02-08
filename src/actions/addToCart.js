export const addToCart = (item,arrayCart,arrayData) => {
    
    return{
        type: 'flight_selected',
        arrayCart:arrayCart,
        arrayData: arrayData,
        payload: item
    }
}