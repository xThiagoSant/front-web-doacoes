import React from 'react';
import {Switch, BrowserRouter, Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import Entidade from './pages/Entidade'
import Evento from './pages/Evento'
import Doacao from './pages/Doacao'
import Listagem from './pages/listagem'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>header...</h1>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/entidade' component={Entidade} />
          <Route exact path='/evento' component={Evento} />
          <Route exact path='/doacao' component={Doacao} />
          <Route exact path='/listagem' component={Listagem} />
        </Switch>
        <h1>footer...</h1>
      </div>    
    </BrowserRouter>
    
  );
}

export default App;
