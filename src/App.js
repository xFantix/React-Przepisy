import React,{useState} from 'react';
import * as style from './style/appStyle';
import Navigation from './components/Navigation';
import './style/index.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import {AppContext} from './context/AppContext';
import Home from './components/Home';

const App = () => {

  const [topRecipe, setTopRecipe] = useState([]);

  return (
    <Router>
      <AppContext.Provider
      value={{
        topRecipe,
        setTopRecipe,
      }}>
    <style.AppStyle>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </style.AppStyle>
    </AppContext.Provider>
    </Router>
  );
}

export default App;
