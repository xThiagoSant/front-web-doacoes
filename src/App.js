import React from 'react';
import {Switch, BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Entidade from './pages/Entidade/Entidade'
import Evento from './pages/Evento/Evento'
import Doacao from './pages/Doacao/Doacao'
import Listagem from './pages/Listagem/Listagem'
import ListagemDoador from './pages/List_doador/List_doador'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/entidade' component={Entidade} />
          <Route exact path='/entidade/:id' component={Entidade}/>
          <Route exact path='/evento' component={Evento} />
          <Route exact path='/evento/:id' component={Evento} />
          <Route exact path='/doacao' component={Doacao} />
          <Route exact path='/doacao/:id' component={Doacao} />
          <Route exact path='/listagem' component={Listagem} />
          <Route exact path='/listagem/doador' component={ListagemDoador} />
        </Switch>
      </div>    
    </BrowserRouter>
    
  );
}

export default App;
