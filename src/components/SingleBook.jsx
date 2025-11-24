import Card from 'react-bootstrap/Card';
import { Component } from 'react';

class SingleBook extends Component {
  checkSelected = () => {
    this.props.isSelected ? 'border border-1 border-primary' : '';
  };

  render() {
    return (
      <Card>
        <Card.Img
          variant="top"
          src={this.props.book.img}
          onClick={() =>
            this.props.changeSelectionState(true, this.props.book.asin)
          }
          className={this.checkSelected(true)}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
