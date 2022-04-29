import './App.css';
import React, { Component } from 'react';
<<<<<<< HEAD
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
//import HomePage from "./Components/Homepage";


function App() {
  return(
=======
import Home from './Components/Home';
import SearchPage from './Components/SearchPage';
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import ReservationPage from "./Components/ReservationPage";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Alert from './Components/Alert';
import ProfileDetails from './Components/ProfileDetails';

function App() {
  return (
    <Router>
      <div className="App">
     
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/searchpage" component={SearchPage} />
        <Route path="/reservationpage" component={ReservationPage} />
        <Route path="/profile" component={ProfileDetails}/>
        <Route path="/payment" component={Payment} />
    <Home/>
    </Switch>
    <Alert/>
    </div>
    </Router>
    //,
    //<Footer/>
>>>>>>> 109a8c45594a2324cdb7aa428ccd79cdf4e5e624
    //<HomePage />
   <SignUp />

   // <Login />
  
      );

  

}

export default App;