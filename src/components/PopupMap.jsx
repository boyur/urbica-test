import React, {Component} from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { Popup } from "react-mapbox-gl"
import { Image, Button } from 'react-bootstrap'

class PopupMap extends Component {

  render() {
    const {user, popupStatus, resetZoomMap, styleImg} = this.props;

    const stylePopup = {
      background: "#fff",
      padding: "5px",
      borderRadius: "2px",
      textAlign: "center"
    };

    const popup = (
      <Popup
        key={user.id}
        offset={[0, -120]}
        coordinates={user.geometry.coordinates}>
        <div style={stylePopup}>
          <div>
            <div>
              <Image src={user.properties.avatar} style={styleImg} circle/>
            </div>
            <p>{user.properties.userName}</p>
            <p>{user.properties.email}</p>
            <a href={user.properties.url} target="_blank">{user.properties.url}</a>
          </div>
          <Button bsSize="xsmall" onClick={resetZoomMap}>
            Hide
          </Button>
        </div>
      </Popup>);

    return (
      <div>
        {popupStatus ? popup : null}
      </div>
    )
  }
}

export default PopupMap