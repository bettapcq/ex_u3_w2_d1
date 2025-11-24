import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';

class AddComment extends Component {
  state = {
    review: {
      comment: '',
      rate: '5',
      elementId: this.props.asin
    }
  };

  saveData = async () => {
    const URL = 'https://striveschool-api.herokuapp.com/api/comments/';

    try {
      const response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(this.state.review),
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMGVkNzIzZTc0MDAwMTVmN2ZkYjkiLCJpYXQiOjE3NjM2NDMwOTUsImV4cCI6MTc2NDg1MjY5NX0.REy03d-jT7KnlSs2hgEzmFhxfLbWzagIFRKUqUZUpeA',
          'Content-type': 'application/json'
        }
      });
      if (response.ok) {
        alert('data saved successfully');
        this.setState({
          review: {
            comment: '',
            rate: '5'
          }
        });
      }
    } catch (e) {
      alert('error data saving', e);
    }
  };


  render() {
    return (
      <>
        <h3 className="mt-3">Add a comment</h3>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            this.saveData();
          }}
        >
          <Form.Group
            className="mb-1"
            controlId="exampleForm.ControlInput1"
          ></Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              value={this.state.review.comment}
              placeholder="Insert your comment here"
              onChange={(e) =>
                this.setState({
                  review: { ...this.state.review, comment: e.target.value }
                })
              }
              required
            />
            <Form.Select
              aria-label="Default select example"
              value={this.state.review.rate}
              onChange={(e) =>
                this.setState({
                  review: { ...this.state.review, rate: e.target.value }
                })
              }
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
            <Button type="submit">Publish</Button>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default AddComment;
