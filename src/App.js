import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Top from './pages/Top';
import Search from './pages/Search';
import Watch from './pages/Watch';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Top}/>
          <Route exact path="/Search" component={Search}/>
          <Route exact path="/Watch" component={Watch}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
