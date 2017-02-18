import React, {Component} from 'react'
import { ListGroup, ListGroupItem, Image, Media } from 'react-bootstrap'

class List extends Component {
  render() {

    const {data, setZoomMap} = this.props;

    const styleList = {
      display: 'inline-block',
      position: 'fixed',
      width: '350px',
      height: '100vh',
      top: 0,
      overflow: 'scroll',
      zIndex: 10
    };

    const styleImg = {
      width: '50px',
      marginRight: '10px'
    };

    const listItems = data.map((user) =>
      <ListGroupItem key={user.id} onClick={setZoomMap(user)}>
        <Media>
          <Media.Left>
            <Image src={user.properties.avatar} style={styleImg} circle/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>{user.properties.userName}</Media.Heading>
            <p>{user.properties.email}</p>
            <a href={user.properties.url} target="_blank">{user.properties.url}</a>
          </Media.Body>
        </Media>
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