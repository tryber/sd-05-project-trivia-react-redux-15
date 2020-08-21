import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import JogoBody from './components/JogoBody';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Switch>
        <Route path="/gamepage" component={JogoBody} />
       </Switch>
      </header>
    </div>
  );
}

export default App;