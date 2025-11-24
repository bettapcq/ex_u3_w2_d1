import { ListGroup } from 'react-bootstrap';
import SingleComment from './SingleComment';
import { Component } from 'react';

class CommentsList extends Component {
  render() {
    return (
      <ListGroup className="my-0">
        {this.props.comments.map((comment) => {
          return (
            <SingleComment key={comment._id} review={comment}></SingleComment>
          );
        })}
      </ListGroup>
    );
  }
}

export default CommentsList;
