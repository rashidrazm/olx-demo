import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import {FirebaseContext} from './store/FirebaseContext'
import Context from './store/FirebaseContext'
import firebase from './firebase/config'
ReactDOM.render(
      <Router>
        <FirebaseContext.Provider value={{firebase}}>
       <Context>
       <App />
       </Context>
       </FirebaseContext.Provider>
       </Router>,
     document.getElementById('root'));