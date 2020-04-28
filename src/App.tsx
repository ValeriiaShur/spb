import React, { Component } from 'react';
import './App.css';
import ReactMapGL, { Layer, Source } from 'react-map-gl';


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
          {/*           <Source id="spbjson" type="geojson" data='https://raw.githubusercontent.com/ValeriiaShur/spb/master/src/component/data/spb_selection.json?token=AK4T4RSBRB4RPBS4AE2DW2C6VAO7A'>
            <Layer id="buildings" type="fill"
              source="spbjson" paint={{ "fill-color": '#ffff00', "fill-opacity": 0.4 }}>
            </Layer>
          </Source> */}
          <Source id='building_footprints' type='vector' url='mapbox://lerashur.spb-buildings' />
          <Layer id="buildings" type="fill"
            source="building_footprints" source-layer="building_footprints"
            paint={{ "fill-color": '#ffff00', "fill-opacity": 0.4 }}>
          </Layer>
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
