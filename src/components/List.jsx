import React, {Component} from 'react'
import { ListGroup, ListGroupItem, Image } from 'react-bootstrap';

class List extends Component {
  render() {

    const {data} = this.props;

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

    const listItems = data.map((item) =>
      <ListGroupItem key={item.id}>
        <Image src={item.properties.avatar} style={styleImg} circle/>
        {item.properties.userName}
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

export default List;