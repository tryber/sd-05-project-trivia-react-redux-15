import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import TelaDoJogo from './pages/TelaDoJogo';
import Feedback from './pages/Feedback';
import Settings from './pages/Settings';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gamepage" component={TelaDoJogo} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
