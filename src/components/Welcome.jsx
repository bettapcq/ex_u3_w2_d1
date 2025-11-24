import Alert from 'react-bootstrap/Alert';

function Welcome() {
  return (
    <Alert variant="success">
      <Alert.Heading>Benvenuto!</Alert.Heading>
      <p className="mb-0">
        Ecco a te gli EpiBooks Horror più belli!
      </p>
    </Alert>
  );
}

export default Welcome;