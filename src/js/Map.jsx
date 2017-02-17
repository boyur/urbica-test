import React, {Component} from 'react'
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

class Map extends Component {
  state = {
    lat: 37.766667,
    lng: 44.716667,
    zoom: 13,
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    const map = (
      <ReactMapboxGl
        center={position}
        style="mapbox://styles/mapbox/streets-v8"
        accessToken="pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={position}/>
        </Layer>
      </ReactMapboxGl>
    );

    return (map);
  }
}

export default Map
