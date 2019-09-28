import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Dashboard from './Screens/Dashboard';
import Profile from './Screens/Profile';
import HealthAdmin from './Screens/HealthAdmin';
import CarouselApp from './Screens/Carousel'; 
import CarouselAppShots from './Screens/CarouselShots'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return(

    <div className="App">
          <Route exact path="/" component={Dashboard}/>
          <Route exact path ="/profile" component={Profile}/>
          <Route exact path ="/health-admin" component = {HealthAdmin} /> 
          <Route exact path = "/carousel" component = {CarouselApp} /> 
          <Route exact path = "/carouselshots" component = {CarouselAppShots} /> 
    </div>

  );

}



export default App;