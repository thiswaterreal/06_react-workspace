import './App.css';
import { Navbar, Nav, Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import bg from './img/bg.png';
import {a,b} from './data.js';

// data.js 에서 만든거 import하기
import data from './data.js';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';


function App() {

  let [shoes] = useState(data);
  //console.log(shoes[0].title);

  return (
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">thiswaterreal_SHOP</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Cart</Nav.Link>
          </Nav>
        </Navbar>

        <Link to="/">홈</Link>
        <Link to="/detail">상세페이지</Link>

        <Routes>
          <Route path="/" element={
            <>
              <div className='main-bg'></div>
              <Container>
                <Row>

                  {/* <Col sm>
                    <img src="https://lovesykkkk.github.io/shoes1.jpg" width="80%"/>
                    <h4>{shoes[0].title}</h4>
                    <p>{shoes[0].price}원</p>
                  </Col>
                  <Col sm>
                    <img src="https://lovesykkkk.github.io/shoes2.jpg" width="80%"/>
                    <h4>{shoes[1].title}</h4>
                    <p>{shoes[1].price}</p>
                  </Col>
                  <Col sm>
                    <img src="https://lovesykkkk.github.io/shoes3.jpg" width="80%"/>
                    <h4>{shoes[2].title}</h4>
                    <p>{shoes[2].price}</p>
                  </Col> */}
                
                
                {/* <Card shoes={shoes[0]} i={1}/>
                <Card shoes={shoes[1]} i={2}/>
                <Card shoes={shoes[2]} i={3}/> */}

                  {
                    shoes.map((a, i)=>{
                      return(
                        <Card shoes={shoes[i]} i={i+1}/>
                      )
                    })
                  }

                </Row>
              </Container>
            </>
          }>
          </Route>
          <Route path="/detail" element={<div>상세페이지</div>}/>
          <Route path="/about" element={<div>어바웃페이지</div>}/>
        </Routes>

        
        
      </>
    </div>
  );
}


//컴포넌트
function Card(props) {
  return(
    <Col sm>
      <img src={"https://lovesykkkk.github.io/shoes" + props.i + ".jpg"} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}원</p>
    </Col>
  )
}



export default App;
