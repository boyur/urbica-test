import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends Component {

  state = {
    mapLoaded: false
  };

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      center: [20, 40],
      zoom: 1.2,
    });

    this.map.on('load', () => {

      console.log('map loaded');

      this.setState({
        mapLoaded: true
      });

      this.map.on('click', (e) => {

        let features = this.map.queryRenderedFeatures(e.point, { layers: ['marker'] });

        if (!features.length) return;

        let feature = features[0];

        let popup = new mapboxgl.Popup()
          .setLngLat(feature.geometry.coordinates)
          .setHTML(feature.properties.userName)
          .addTo(this.map);
      });

      this.map.on('mousemove', (e) => {
        if (!this.props.isLoaded) return;

        let features = this.map.queryRenderedFeatures(e.point, { layers: ['marker'] });
        this.map.getCanvas().style.cursor = (features && features.length) ? 'pointer' : '';
      });
    });


  }

  addMaerkers = (data) => {
    console.log('Loaded markers...');
      this.map.addLayer({
        "id": "marker",
        "type": "symbol",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": data
          }
        },
        "layout": { "icon-image": "marker-15", "icon-size": 1.3}
      });
  };



  render() {
      const {data, resetZoomMap, isLoaded} = this.props;


      isLoaded && this.state.mapLoaded ? this.addMaerkers(data) : null;

      const styles = {
        map: {
          height: '100vh',
          width: '100vw',
          zIndex: 0
        },
        preload: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '32px'
        }
      };

    return (
      <div>
        <div id="map" style={styles.map}/>
        {
          !isLoaded &&
          <div style={styles.preload}>Loading data...</div>
        }
      </div>
    );
  }
}

export default Map