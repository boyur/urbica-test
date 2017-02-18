import React, {Component} from 'react'
import { Popup } from "react-mapbox-gl"

class PopupMap extends Component {

  render() {
    const {user, popupShowLabel, popupChange} = this.props;

    const stylePopup = {
      background: "#fff",
      padding: "5px",
      borderRadius: "2px"
    };

    return (
      <Popup
        key={user.id}
        offset={[0, -50]}
        coordinates={user.geometry.coordinates}>
        <div>
            <span style={{stylePopup, display: popupShowLabel ? "block" : "none"}}>
              {user.properties.userName}
            </span>
            <div onClick={popupChange.bind(this, !popupShowLabel)}>
              {
                popupShowLabel ? "Hide" : "Show"
              }
            </div>
        </div>
      </Popup>
    )

  }
}

export default PopupMap