import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <div>
      
       <Route exact path='/'> 
      <Home />
      </Route>
      <Route path='/signup'> 
      <Signup />
      </Route>
      <Route path='/login'> 
      <Login />
      </Route>
      
    </div>
  );
}

export default App;
