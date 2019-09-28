import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Initial from './Screens/Initial';
import Dashboard from './Screens/Dashboard';
import Profile from './Screens/Profile';
import LoginScreen from './Screens/LoginScreen';

function App() {
  return(

    <div className="App">

        <Route exact path="/" component={Initial}/> 
        <Route exact path="/login" component={LoginScreen}/>
        <Route exact path ="/profile" component={Profile}/>
        <Route exact path="/dashboard" component={Dashboard}/>

    </div>

  );

}



export default App;