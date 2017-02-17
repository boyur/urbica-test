import React, {Component as ReactComponent}  from 'react'

export default (Component) => class zoomMap extends ReactComponent {
  state = {
    center: [37.766667, 44.716667],
    zoom: [5]
  };

  render() {
    return <Component {...this.props} {...this.state} setZoomMap={this.setZoomMap}/>
  }

  setZoomMap = user => ev => {
    ev && ev.preventDefault && ev.preventDefault();
    console.log(user);
    this.setState({
      center: user.geometry.coordinates,
      zoom: [14]
    });
  };
}