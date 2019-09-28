import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Dashboard from './Screens/Dashboard';
import Profile from './Screens/Profile';


function App() {
  return(

    <div className="App">
<<<<<<< HEAD
          <Route exact path="/" component={Dashboard}/>
          <Route exact path ="/profile" component={Profile}/>
=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/screens/Profile.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> master
    </div>

  );

}



export default App;