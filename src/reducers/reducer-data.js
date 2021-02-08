export default function(state = null,action){
var data = [
  {   
      tags: 'cataratas del iguazu, misiones, argentina',
      id: 534663,
      photo: '/images/cataratas.jpg',   
      city: 'Cataratas del iguazu',
      country: 'Argentina',       
      price: 1000,
      cartAdded: false
    },
    {   
      tags: 'bariloche neuquen argentina',
      id: 534323,
      photo: '/images/bariloche.jpg',     
      city: 'Bariloche',
      country: 'Argentina',      
      price: 1000,
      cartAdded: false
    },
    {   
      tags: 'brasil rio de janeiro brazil',
      id: 5323,
      photo: '/images/brasilrio.jpg',        
      city: 'Rio de janeiro',
      country: 'Brasil',     
      price: 1000,
      cartAdded: false
    },
    {   
      tags: 'chile concepcion',
      id: 5123,
      photo: '/images/chileconcepcion.jpg',        
      city: 'Concepcion',
      country: 'Chile',     
      price: 1000,
      cartAdded: false
    },
     {   
      tags: 'brasil buzios brazil playa',
      id: 534634,
      photo: '/images/buzios.jpg',        
      city: 'Buzios',
      country: 'Brasil',     
      price: 1000,
      cartAdded: false
    },
    {   
      tags: 'chile valparaiso',
      id: 634323,
      photo: '/images/chilevalparaiso.jpg',        
      city: 'Valparaiso',
      country: 'Chile',     
      price: 1000,
      cartAdded: false
    },
    {   
      tags: 'brasil brazil sao paulo',
      id: 734323,
      photo: '/images/saopablo.jpg',        
      city: 'São Paulo',
      country: 'Brasil',     
      price: 1000,
      cartAdded: false
    }
]



switch(action.type)
    {
        case 'flight_selected':            
            data = action.arrayData  
            
            const element = data.find(item => item.id === action.payload.id)
            if(element)
            {
              let index = data.indexOf(element)
              data[index].cartAdded = true
            
            return data 
            }
            else{return data}
            break;
        default: return data;    
    }

}