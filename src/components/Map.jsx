import React, {Component} from 'react'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

export default class Map extends Component {
  state = {
    center: [37.766667, 44.716667],
    zoom: [5]
  };

  markerClick = (user) => {
    console.log(user.geometry.coordinates, user.id);
    this.setState({
      center: user.geometry.coordinates,
      zoom: [14]
    });
  };

  render() {
    const {data} = this.props;

    return (
      <ReactMapboxGl
        center={this.state.center}
        zoom={this.state.zoom}
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
          {
            data.map((user) => (
              <Feature
                key={user.id}
                coordinates={user.geometry.coordinates}
                onClick={this.markerClick.bind(this, user)}
              />
            ))
          }
        </Layer>
      </ReactMapboxGl>
    );
  }
}
