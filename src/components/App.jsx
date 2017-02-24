import React, {Component} from 'react'
import Map from './Map'
import List from './List'

class App extends Component {

  state = {
    center: [37.766667, 44.716667],
    zoom: [3],
    popupStatus: false,
  };

  loadedData = (url) => {
    console.log("Loading...");
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          console.log("isLoaded...");
          this.setState({
            isLoaded: true,
            data: data.features
          });
        }, 6000);
      })
    };

    componentWillMount() {
      console.log("componentWillMount - App.jsx");
      this.loadedData('http://localhost:3030/features');
  }

  render() {
    console.log("render app");

    const styleImg = {
      width: '50px',
      marginRight: '10px'
    };

    const setZoomMap = user => ev => {
      console.log(user);
      this.setState({
        center: user.geometry.coordinates,
        zoom: [13],
        popupStatus: true,
        user
      });
    };

    const resetZoomMap = () => {
      this.setState({
        center: [37.766667, 44.716667],
        zoom: [3],
        popupStatus: false
      });
    };

    return (
      <div>
        <Map {...this.props} {...this.state} styleImg={styleImg} setZoomMap={setZoomMap} resetZoomMap={resetZoomMap}/>
        <List {...this.props} {...this.state} styleImg={styleImg} setZoomMap={setZoomMap} resetZoomMap={resetZoomMap}/>
      </div>
    );
  }
}

export default App;