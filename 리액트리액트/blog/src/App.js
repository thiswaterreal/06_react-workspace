/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);

  [1,2,3].map(function(){
    
  })


  return (
    <div className="App">

      <div className='black-nav'>
        <h4 style={{color:'yellow'}}>ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>버튼</button>

      <button onClick={()=>{
        let order = [...글제목];
        order.sort();
        글제목변경(order);
      }}>가나다순 정렬</button>

      <div className='list'>
        <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍🏻</span> {따봉} </h4>
        <p>9월 11일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>9월 11일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{setModal(!modal)}}>{글제목[2]}</h4>
        <p>9월 11일 발행</p>
      </div>


      {
        modal == true ? <Modal/> : null
      }


      





    </div>
  );
}

function Modal() {
  return (
    <>
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div><div></div>
    </>
  )
}


// let [따봉, 따봉변경] = useState(0);
// <span onClick={()=>{따봉변경(따봉+1)}}>👍🏻</span> {따봉}
// <span onClick={()=>{변경(원본+1)}}>👍🏻</span> {원본}
// <span onClick={()=>{변경(바꿀값)}}>👍🏻</span> {원본}

export default App;
