import './App.css';
import { Navbar, Nav, Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import data1 from './data.js';
import { useRef, useState } from 'react';
import ProductList from './ProductList';
import ProductEditor from './ProductEditor';
import ProductDetail from './ProductDetail';

function App() {

  let navigate = useNavigate();

  const [data, setData] = useState(data1);
  
  const onRemove = (targetId)=>{
    const newProductList = data.filter((it)=> it.id !== targetId);
    setData(newProductList);
    navigate("/list");
  }

  const dataId = useRef(17);

  const onCreate = (brand, name, price, img)=>{
    const newItem = {
      brand,
      name,
      price,
      img,
      id : dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data])
    navigate("/list");
  }

  const onEdit = (targetId, newBrand, newName, newPrice, newImg) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === targetId
          ? { ...item, brand: newBrand, name: newName, price: newPrice, img: newImg}
          : item
      )
    );
  };



  return (
    <div className="App">
      <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Sujan's 25</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/")}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/regist")}}>registration</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/list")}}>List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

      {/*
      <Link to="/">홈</Link>
      <Link to="/regist">등록하기</Link>
      <Link to="/list">리스트조회</Link>
      onclick달아서 navigate로 하면 새로고침 안될..듯? (href는 새로고침됨)
      */}

      <Routes>
        <Route path="/" element={
          <>
          <div className='main-bg'></div>
          <Container>
            <Row>
              <h2 style={{marginTop:"20px", fontWeight:"bold"}}>🔥 핫하디 핫한! 신제품 🔥</h2>
              <ProductList productList={data} onRemove={onRemove} />
              <div style={{marginBottom:"100px"}}></div>
            </Row>
          </Container>
          </>
        }/>
        <Route path="/regist" element={
          <>
            <h2 style={{marginTop:"30px", marginBottom:"30px", fontWeight:"bold"}}>신상품 등록란 📝</h2>
            <ProductEditor onCreate={onCreate}/>
          </>
        }/>
        <Route path="/list" element={
          <>
            <h2 style={{marginTop:"30px", fontWeight:"bold"}}>신상품 전체 리스트 한눈에 👀!</h2>
            <ProductList productList={data} onRemove={onRemove}/>
          </>
        }/>

        <Route path="/detail/:id" element={
          <>
            <ProductDetail data={data} onRemove={onRemove} onEdit={onEdit}/>
          </>
        } />
      </Routes>

      </>
    </div>
  );
}

export default App;
