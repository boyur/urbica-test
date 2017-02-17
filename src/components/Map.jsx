import React, {Component} from 'react'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import List from './List'

class Map extends Component {

  state = {
    center: [37.766667, 44.716667],
    zoom: [5]
  };

  render() {
    const {data} = this.props;

    const setZoomMap = user => ev => {
      console.log(user);
      this.setState({
        center: user.geometry.coordinates,
        zoom: [14]
      });
    };

    return (
    <div>
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
                onClick={setZoomMap(user)}
              />
            ))
          }
        </Layer>
      </ReactMapboxGl>
      <List {...this.props} setZoomMap={setZoomMap}/>
    </div>

    );
  }
}

export default Map