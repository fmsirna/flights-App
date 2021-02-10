import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/Cart.js';
import About from './pages/About.js';



function App() {


  return (
    < >
      <Router>
        <div  className='container'>
        <Navbar />
        <img src= {'/images/back.jpg'} className="backImage"/> 
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/cart' component={Cart} />
          <Route path='/aboutus' component={About} />
        </Switch>
        <footer className='footer'> <p>2021 all rights reserved</p> </footer>
        </div>
      </Router>      
    </>
  );
}

export default App;