import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import SingleBook from './SingleBook';
import { Col, Row } from 'react-bootstrap';
import horror from '../data/horror.json';
import CommentArea from './CommentArea';

class BooksList extends Component {
  state = {
    inputString: '',
    selected: false,
    bookAsinSelected: ''
  };

  changeSelectionState = (value, asin) => {
    this.setState({
      selected: value,
      bookAsinSelected: asin
    });
  };
  render() {
    return (
      <>
        <Col>
          <Form className="d-flex mb-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={this.state.inputString}
              onChange={(e) => this.setState({ inputString: e.target.value })}
            />
          </Form>
        </Col>
        <Col>
          <Row>
            <Col xs={8}>
            <Row>
              {horror
                .filter((b) => {
                  return b.title.toLowerCase().includes(this.state.inputString);
                })
                .map((book) => (
                  <Col key={book.asin} xs={12} md={6} lg={4}>
                    <SingleBook
                      book={book}
                      asinFromBookList={book.asin}
                      changeSelectionState={this.changeSelectionState}
                      selectedAsin={this.state.bookAsinSelected}
                      isSelected={this.state.selected}
                    />
                  </Col>
                ))}
                </Row>
            </Col>
            <Col xs={4}>
              <CommentArea asinFromSelection={this.state.bookAsinSelected} />
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}
export default BooksList;
