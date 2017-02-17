import React, {Component} from 'react'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

class Map extends Component {
  state = {
    lat: 37.766667,
    lng: 44.716667,
    zoom: [5]
  };

  render() {
    const {data} = this.props;
    const position = [this.state.lat, this.state.lng];


    return (
      <ReactMapboxGl
        center={position}
        zoom={this.state.zoom}
        style="mapbox://styles/mapbox/streets-v8"
        accessToken="pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>

        {/*<Layer*/}
          {/*type="symbol"*/}
          {/*id="marker1"*/}
          {/*layout={{ "icon-image": "marker-15" }}>*/}
          {/*<Feature coordinates={position}/>*/}
        {/*</Layer>*/}


        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
          {
            data.map((user) => (
              <Feature
                key={user.id}
                coordinates={user.geometry.coordinates}
              />
            ))
          }
        </Layer>
      </ReactMapboxGl>
    );
  }
}

export default Map
