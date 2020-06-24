import React from 'react';
import NavbarGame from './components/navbar/NavbarGame';
import Board from './components/board/Board';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css'


function App() {


  return (
    <div className="App">

    <NavbarGame />
      <Container>
        <Row>
          <Col lg={12} className="padding">
            <Board />

          </Col>
        </Row>
    </Container>
    </div>
  );
}

export default App;