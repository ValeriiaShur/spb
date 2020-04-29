import React, { Component } from 'react';
import ReactMapGL, { Layer, Source } from 'react-map-gl';
import '../App.css';

class Map extends Component {
    state = {
        viewport: {
            width: "100%",
            height: "100%",
            latitude: 59.945402,
            longitude: 30.155074,
            zoom: 9
        }
    };
    render() {
        return (
            <div className="map">
                <ReactMapGL {...this.state.viewport}
                    mapStyle="mapbox://styles/lerashur/ck3sp0jab08qf1co62ujw9o13"
                    onViewportChange={(viewport => this.setState({ viewport }))}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>
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

export default Map;