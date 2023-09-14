import './App.css';
import { Navbar, Nav, Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';

import data from './data';
import { useRef, useState } from 'react';
import ProductList from './ProductList';
import ProductEditor from './ProductEditor';

function App() {

  let [product] = useState(data);
  

  return (
    <div className="App">
      <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Sujan's 25</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/regist">registration</Nav.Link>
            <Nav.Link href="/list">List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

      {/* <Link to="/">홈</Link>
      <Link to="/regist">등록하기</Link>
    <Link to="/list">리스트조회</Link> */}

      <Routes>
        <Route path="/" element={
          <>
          <div className='main-bg'></div>
          <Container>
            <Row>
              <h2>이번달 신상 제품</h2>
              <ProductList productList={data} />

            </Row>
          </Container>
          </>
        }/>
        <Route path="/regist" element={
          <>
            <div>등록 페이지</div>
            <ProductEditor></ProductEditor>
          </>
        }/>
        <Route path="/list" element={
          <>
            <h2 style={{marginTop:"20px"}}>신상품 전체 리스트 한눈에!</h2>
            <ProductList productList={data} />
          </>
        }/>
      </Routes>




      

      </>
    </div>
  );
}

export default App;
