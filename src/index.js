import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import {FirebaseContext} from './store/FirebaseContext'
import firebase from './firebase/config'
ReactDOM.render(
      <Router>
        <FirebaseContext.Provider value={{firebase}}>
       <App />
       </FirebaseContext.Provider>
       </Router>,
     document.getElementById('root'));