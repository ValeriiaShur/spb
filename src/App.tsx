import React, { Component } from 'react';
import './App.css';
import ReactMapGL, { Layer, Source } from 'react-map-gl';
import * as spbBuildings from './component/data/spb_selection.json';


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
          <Source id="spbjson" type="geojson" data='https://raw.githubusercontent.com/ValeriiaShur/geo-data/master/saint_petersburg/data/spb_selection.json?token=AK4T4RQME3SR7PPWQ6GZHFC6U3VFQ'>
            <Layer id="buildings" type="fill"
              source="spbjson" paint={{ "fill-color": '#ffff00', "fill-opacity": 0.4 }}>
            </Layer>
          </Source>
{/*           <Source id="vector_tiles" type="vector" url="https://raw.githubusercontent.com/ValeriiaShur/geo-data/master/saint_petersburg/data/spb-mn-tiles-details.tilejson?token=AK4T4RWJN5YCMUY2EHAIDDK6U3YII" />
          <Layer id="layer_id" type="" source="vector_tiles"
            source-layer="vector_tiles" /> */}

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
