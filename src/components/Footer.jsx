import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container className="bg-dark pt-3" fluid>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <p className="text-secondary text-center">&copy;EpiBook - 2025</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
