import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './component/NavBar';
import Map from './component/Map';
import { About } from './component/About';
import { NoMatch } from './component/NoMatch';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Map} />
          <Route exact path={process.env.PUBLIC_URL + '/about'} component={About} />
          {/* <Route path={process.env.PUBLIC_URL + '*'} component={NoMatch} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}


/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
