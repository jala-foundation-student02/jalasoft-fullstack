import logo from './logo.svg';
import './App.css';
import CompCallToApi from './components/compCallToApi';
import CompNav from './components/compNav';
import CompSendCar from './components/compSendCar';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">

      <Container>
        <CompNav />
        <Row>
          <Col><Welcome /></Col>
          <Col><CompSendCar /></Col>
        </Row>
        <Row>
          <Col>
            <CompCallToApi /></Col>
        </Row>
      </Container>





    </div>
  );
}

export default App;


function Welcome() {
  return (<>You can select the product you want!</>);
}