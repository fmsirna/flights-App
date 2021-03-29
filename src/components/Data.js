// this information could have been replaced by getting info from an API

import moment from 'moment';


export const flightData = [
  {   
    tags: 'iguazu, cataratas, misiones, argentina',
    id: 534663,
    photo: '/images/cataratas.jpg',   
    city: 'Iguazu',
    country: 'Argentina',     
    cartAdded:false,  
    price: 600,
    departure: moment().add(7,'days').format("MM/DD/YYYY"),
    return: moment().add(22,'days').format("MM/DD/YYYY")    
  },
  {   
    tags: 'bariloche neuquen argentina',
    id: 534323,
    photo: '/images/bariloche.jpg',     
    city: 'Bariloche',
    country: 'Argentina',     
    cartAdded:false,  
    price: 700,
    departure: moment().add(7,'days').add(2,'months').format("MM/DD/YYYY"),
    return: moment().add(22,'days').add(2,'months').format("MM/DD/YYYY")    
  },
  {   
    tags: 'brasil rio de janeiro brazil',
    id: 5323,
    photo: '/images/brasilrio.jpg',        
    city: 'Rio de janeiro',
    country: 'Brasil',     
    cartAdded:false, 
    price: 1200,
    departure: moment().add(7,'days').add(3,'months').format("MM/DD/YYYY"),
    return: moment().add(22,'days').add(3,'months').format("MM/DD/YYYY")   
  },
  {   
    tags: 'chile concepcion',
    id: 5123,
    photo: '/images/chileconcepcion.jpg',        
    city: 'Concepcion',
    country: 'Chile',   
    cartAdded:false,   
    price: 1100,
    departure: moment().add(13,'days').add(4,'months').format("MM/DD/YYYY"),
    return: moment().add(22,'days').add(4,'months').format("MM/DD/YYYY")    
  },
   {   
    tags: 'brasil buzios brazil playa',
    id: 534634,
    photo: '/images/buzios.jpg',        
    city: 'Buzios',
    country: 'Brasil', 
    cartAdded:false,     
    price: 1600,
    departure: moment().add(13,'days').add(5,'months').format("MM/DD/YYYY"),
    return: moment().add(22,'days').add(5,'months').format("MM/DD/YYYY")     
  },
  {   
    tags: 'chile valparaiso',
    id: 634323,
    photo: '/images/chilevalparaiso.jpg',        
    city: 'Valparaiso',
    country: 'Chile',     
    cartAdded:false, 
    price: 1600,
    departure: moment().add(13,'days').add(6,'months').format("MM/DD/YYYY"),
    return: moment().add(22,'days').add(6,'months').format("MM/DD/YYYY")  
  },
  {   
    tags: 'brasil brazil sao paulo',
    id: 734323,
    photo: '/images/saopablo.jpg',        
    city: 'São Paulo',
    country: 'Brasil',     
    cartAdded:false, 
    price: 800,
    departure: moment().add(13,'days').add(7,'months').format("MM/DD/YYYY"),
    return: moment().add(22,'days').add(7,'months').format("MM/DD/YYYY")  
  },
  {   
    tags: 'uruguay punta del este',
    id: 134323,
    photo: '/images/uruguaypuntadeleste.jpg',        
    city: 'Punta del este',
    country: 'Uruguay', 
    cartAdded:false,     
    price: 1800,
    departure: moment().add(13,'days').add(7,'months').format("MM/DD/YYYY"),
    return: moment().add(22,'days').add(7,'months').format("MM/DD/YYYY")  
  },
  {   
    tags: 'uruguay montevideo',
    id: 124323,
    photo: '/images/uruguaymontevideo.jpg',        
    city: 'Montevideo',
    country: 'Uruguay',   
    cartAdded:false,   
    price: 750,
    departure: moment().add(13,'days').add(8,'months').format("MM/DD/YYYY"),
    return: moment().add(22,'days').add(8,'months').format("MM/DD/YYYY")   
  },
  {   
    tags: 'colombia medellin',
    id: 4323,
    photo: '/images/medellincolombia.jpg',        
    city: 'Medellin',
    country: 'Colombia', 
    cartAdded:false,     
    price: 950,
    departure: moment().add(13,'days').add(1,'months').format("MM/DD/YYYY"),
    return: moment().add(22,'days').add(1,'months').format("MM/DD/YYYY")  
  },
  {   
    tags: 'colombia bogota',
    id: 1023,
    photo: '/images/colombiabogota.jpg',        
    city: 'Bogota',
    country: 'Colombia',  
    cartAdded:false,    
    price: 1050,
    departure: moment().add(2,'days').format("MM/DD/YYYY"),
    return: moment().add(15,'days').format("MM/DD/YYYY")    
  },
  {   
    tags: 'mexico cancun',
    id: 133333,
    photo: '/images/cancunMexico.jpg',        
    city: 'Cancun',
    country: 'Mexico',   
    cartAdded:false,   
    price: 1950,
    departure: moment().add(1,'days').format("MM/DD/YYYY"),
    return: moment().add(8,'days').format("MM/DD/YYYY")    
  },
  {   
    tags: 'mexico playa del carmen',
    id: 133334,
    photo: '/images/playacarmenmexico.jpg',        
    city: 'Playa del carmen',
    country: 'Mexico',    
    cartAdded:false,  
    price: 1450,
    departure: moment().add(13,'days').add(1,'months').format("MM/DD/YYYY"),
    return: moment().add(22,'days').add(1,'months').format("MM/DD/YYYY")    
  },
  {   
    tags: 'usuahia argentina nieve sur',
    id: 133335,
    photo: '/images/usuahiaargentina.jpg',        
    city: 'Usuahia',
    country: 'Argentina', 
    cartAdded:false,     
    price: 1600,
    departure: moment().add(13,'days').add(1,'months').format("MM/DD/YYYY"),
    return: moment().add(22,'days').add(1,'months').format("MM/DD/YYYY")    
  },
  {   
    tags: 'mendoza argentina',
    id: 133336,
    photo: '/images/mendozaargentina.jpg',        
    city: 'Mendoza',
    country: 'Argentina',  
    cartAdded:false,    
    price: 1600,
    departure: moment().add(22,'days').format("MM/DD/YYYY"),
    return: moment().add(40,'days').format("MM/DD/YYYY")    
  },
  {   
    tags: 'cordoba argentina',
    id: 133337,
    photo: '/images/cordobaargentina.jpg',        
    city: 'Cordoba',
    country: 'Argentina',     
    cartAdded:false, 
    price: 500,
    departure: moment().add(1,'days').format("MM/DD/YYYY"),
    return: moment().add(10,'days').format("MM/DD/YYYY")    
  },
  {   
    tags: 'cusco peru',
    id: 133338,
    photo: '/images/perucusco.jpg',        
    city: 'Cusco',
    country: 'Peru', 
    cartAdded:false,     
    price: 1000,
    departure: moment().add(13,'days').add(5,'months').format("MM/DD/YYYY"),
    return: moment().add(22,'days').add(5,'months').format("MM/DD/YYYY")    
  },
  {   
    tags: 'lima peru',
    id: 133339,
    photo: '/images/perulima.jpg',        
    city: 'Lima',
    country: 'Peru',   
    cartAdded:false,   
    price: 1000,
    departure: moment().add(1,'days').add(7,'months').format("MM/DD/YYYY"),
    return: moment().add(6,'days').add(7,'months').format("MM/DD/YYYY")    
  }
]

