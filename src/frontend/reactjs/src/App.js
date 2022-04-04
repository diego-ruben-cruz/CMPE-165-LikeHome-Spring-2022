import React, { Component } from 'react';
import Home from './Components/Home';
import SearchPage from './Components/SearchPage';
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/searchpage" component={SearchPage} />
        <Route path="/payment" component={Payment} />
    <Home/>
    </Switch>
    </div>
    </Router>
    //,
    //<Footer/>
    //<HomePage />
    //<SignUp />
    //<Login />
  );
}

export default App;