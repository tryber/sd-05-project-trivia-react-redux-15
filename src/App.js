import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import JogoBody from './components/JogoBody';
import homepage from './components/homepage'
import Home from './pages/Home'
import FormLogin from './components/FormLogin';
import TelaDoJogo from './pages/TelaDoJogo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gamepage" component={TelaDoJogo} />
       </Switch>
      </header>
    </div>
  );
}

export default App;