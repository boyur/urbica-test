import React, {Component} from 'react'
import Map from './Map'
import List from './List'

class App extends Component {

  render() {
    const {data} = this.props;

    return (
      <div>
        <Map data={data} />
        <List data={data} />
      </div>
    );
  }
}

export default App;