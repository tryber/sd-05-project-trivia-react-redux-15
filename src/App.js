import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
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
