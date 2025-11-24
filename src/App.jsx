import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Footer from './components/Footer';
// import AllTheBooks from './components/AllTheBooks';
import Welcome from './components/Welcome';
import BooksList from './components/BooksList';
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    <>
      <MyNav></MyNav>
      <Welcome></Welcome>
      {/* <AllTheBooks></AllTheBooks> */}
      <Container>
        <Row className="flex-column">
          <BooksList />
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
