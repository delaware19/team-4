import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Dashboard from './Screens/Dashboard';
import Profile from './Screens/Profile';
import LoginScreen from './Screens/LoginScreen';

function App() {
  return(

    <div className="App">
          <Route exact path ="/" component={LoginScreen}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path ="/profile" component={Profile}/>
    </div>

  );

}



export default App;