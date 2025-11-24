import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import horror from '../data/horror.json';

const AllTheBooks = () => {
  return (
    <Container>
      <Row>
        {horror.map((book) => (
          <Col key={book.asin} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category} </Card.Text>
                <Card.Text> {book.price} € </Card.Text>
                <Button variant="primary">Go to details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
