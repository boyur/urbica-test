import React, {Component} from 'react'
import Map from './Map'

class App extends Component {

  render() {
    const {data} = this.props;

    return (
      <div>
        <Map data={data} />
      </div>
    );
  }
}

export default App;