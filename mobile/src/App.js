import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Initial from './Screens/Initial';
import Dashboard from './Screens/Dashboard';
import Profile from './Screens/Profile';


function App() {
  return(

    <div className="App">
          <Route exact path="/" component={Initial}/>
          <Route exact path="/Dashboard" component={Dashboard}/>
          <Route exact path ="/profile" component={Profile}/>
    </div>

  );

}



export default App;