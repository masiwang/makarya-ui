import React, {Component, useState} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Landing from './screens/auth/Landing';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Home from './screens/core/pages/Home';
import FreshToday from './screens/core/pages/FreshToday'
import Product from './screens/core/pages/Product'

//test
import Notification from './screens/core/pages/Main_Notification'

import Main from './screens/core/Main';

class App extends Component{
  constructor(){
    super()
    this.state = {
      isLogin: true
    }
  }
  render(){
    return(
      // <Router>
      //     {localStorage.getItem('isLogin') ? <Redirect to="/"/> : <Redirect to="/"/>}
      //      <Route exact path="/" component={Main}/>
      //      <Route exact path="/landing" component={Landing}/>
      //      <Route exact path="/login" component={Login}/>
      //      <Route exact path="/register" component={Register}/>
      //      <Route exact path="/home" component={Home}/>
      //      <Route exact path="/fresh-today" component={FreshToday}/>
      //      <Route exact path="/product" component={Product}/>
      //  </Router>
      <Notification/>
    )
  }
}

export default App;