import React from 'react';
import {Switch, BrowserRouter, Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import Entidade from './pages/Entidade';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>header...</h1>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/entidade' component={Entidade} />
        </Switch>
        <h1>footer...</h1>
      </div>    
    </BrowserRouter>
    
  );
}

export default App;
