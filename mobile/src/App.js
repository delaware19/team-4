import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Initial from './Screens/Initial';
import Dashboard from './Screens/Dashboard';
import Profile from './Screens/Profile';
<<<<<<< HEAD
import HealthAdmin from './Screens/HealthAdmin';
import CarouselApp from './Screens/Carousel'; 
import CarouselAppShots from './Screens/CarouselShots'
import 'bootstrap/dist/css/bootstrap.min.css';

=======
import LoginScreen from './Screens/LoginScreen';
>>>>>>> dashboardMenu

function App() {
  return(

    <div className="App">
<<<<<<< HEAD
          <Route exact path="/" component={Dashboard}/>
          <Route exact path ="/profile" component={Profile}/>
          <Route exact path ="/health-admin" component = {HealthAdmin} /> 
          <Route exact path = "/carousel" component = {CarouselApp} /> 
          <Route exact path = "/carouselshots" component = {CarouselAppShots} /> 
=======

        <Route exact path="/" component={Initial}/> 
        <Route exact path="/login" component={LoginScreen}/>
        <Route exact path ="/profile" component={Profile}/>
        <Route exact path="/dashboard" component={Dashboard}/>

>>>>>>> dashboardMenu
    </div>

  );

}



export default App;