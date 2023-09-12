import logo from './logo.svg';
import './App.css';

import data from './data.js';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  


  let [shoes] = useState(data);

  return (
    <div className="App">

      <Link to="/">홈</Link>/
      <Link to="/detail">상세페이지</Link>/
      <Link to="/about">어바웃페이지</Link>

      <Routes>
        <Route path="/" element={
          <>
          <div>메인페이지</div>
          <div className='main-bg'></div>
          {
            shoes.map(function(a,i){
              return(
                <>
                  <Card shoes={shoes} i={i}></Card>
                </>
              )
            })
          }
          </>
        }></Route>
        <Route path="/detail" element={<div>상세페이지</div>}></Route>
        <Route path="/about" element={<div>어바웃페이지</div>}></Route>
      </Routes>
      

    </div>
  );
}

function Card(props){
  return(
    <div>
      <img src={`http://lovesykkkk.github.io/shoes${props.i + 1}.jpg`} width="30%"/>
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content}</p>
      <p>{props.shoes[props.i].price}</p>
    </div>
  )
}


export default App;
