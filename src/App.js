import React from 'react';
import * as style from './style/appStyle';
import Navigation from './components/Navigation';
import './style/index.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from './components/Home';
const App = () => {

  


  return (
    <Router>
    <style.AppStyle className="App">
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </style.AppStyle>
    </Router>
  );
}

export default App;
