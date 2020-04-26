import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMapGL from 'react-map-gl';
//import * as spbBuildings from "./component/data/spbBuldings";

class App extends Component {
  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 59.938504,
      longitude: 30.355225,
      zoom: 9
    }
  };
  render() {
    return (
      <div className="App">
        <ReactMapGL {...this.state.viewport}
          mapStyle="mapbox://styles/lerashur/ck3sp0jab08qf1co62ujw9o13"
          onViewportChange={(viewport => this.setState({ viewport }))}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>
        </ReactMapGL>
      </div>
    );
  }
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
