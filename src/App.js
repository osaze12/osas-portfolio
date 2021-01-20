
import './App.css';
import React from 'react';
import Main from './components/Main';
import Nav from './components/Nav';

import Contact from './components/Contact';
import Projects from './components/Projects';
import ErrorPage from './components/ErrorPage';
import {Route, Switch } from 'react-router-dom';



function App() {
  

  return (
    <div className="App"> 
      <Nav />
      <Switch>
        <Route  exact path="/" component={Main} />
        <Route path="/contact" component={Contact} />
        <Route path="/Projects" component={Projects} />
        <Route component={ErrorPage} />
      </Switch>



    </div>
  );
}

export default App;
