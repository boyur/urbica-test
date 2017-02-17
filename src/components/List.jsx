import React, {Component} from 'react'
import { ListGroup, ListGroupItem, Image } from 'react-bootstrap';

class List extends Component {
  render() {

    const {data, setZoomMap} = this.props;

    const styleList = {
      display: 'inline-block',
      position: 'fixed',
      width: '300px',
      height: '100vh',
      top: 0,
      overflow: 'scroll'
    };

    const styleImg = {
      width: '50px',
      marginRight: '10px'
    };

    const listItems = data.map((user) =>
      <ListGroupItem key={user.id} onClick={setZoomMap(user)}>
        <Image src={user.properties.avatar} style={styleImg} circle/>
        {user.properties.userName}
      </ListGroupItem>
    );

    return (
      <div style={styleList}>
        <ListGroup>
          {listItems}
        </ListGroup>
      </div>
    )
  }
}

export default List