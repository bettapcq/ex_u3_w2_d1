import { Component } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import CommentsList from './CommentsList';
import AddComment from './AddComment';

class CommentArea extends Component {
  state = {
    comments: [],
    loading: true,
    error: false
  };

  getComments = (asin) => {
    const URL = 'https://striveschool-api.herokuapp.com/api/comments/';

    fetch(URL + asin, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMGVkNzIzZTc0MDAwMTVmN2ZkYjkiLCJpYXQiOjE3NjM2NDMwOTUsImV4cCI6MTc2NDg1MjY5NX0.REy03d-jT7KnlSs2hgEzmFhxfLbWzagIFRKUqUZUpeA'
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error('errore nella chiamata: ' + res.status);
        }
      })

      .then((commentsArray) => {
        console.log(commentsArray);

        this.setState({
          comments: commentsArray,
          loading: false
        });
      })
      .catch((err) => {
        console.log('errore nella chiamata: ', err);
        this.setState({
          loading: false,
          error: true
        });
      });
  };

  componentDidMount() {
    this.getComments(this.props.asinFromSelection);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asinFromSelection !== this.props.asinFromSelection) {
      this.getComments(this.props.asinFromSelection);
    }
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col>
            <h3>Book Reviews</h3>
            {this.state.loading && <Spinner animation="grow" />}
          </Col>
        </Row>
        { (this.state.asinFromSelection !== '') &&
        <>
          <Row>
            <Col>
              <CommentsList comments={this.state.comments}></CommentsList>
            </Col>
          </Row>
          <Row>
            <AddComment asinFromSelection={this.props.asinFromSelection} />
          </Row>
        </>
  }
      </Container>
    );
  }
}

export default CommentArea;
