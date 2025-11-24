import Card from 'react-bootstrap/Card';
import { Component } from 'react';

class SingleBook extends Component {
  checkSelected = () => {
    return this.props.isSelected === true && this.props.selectedAsin === this.props.book.asin
      ? 'border border-2 border-danger'
      : '';
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
          className={this.checkSelected()}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
