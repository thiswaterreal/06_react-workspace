/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [index, setIndex] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">

      <div className='black-nav'>
        <h4 style={{color:'yellow'}}>ReactBlog</h4>
      </div>

      {/* <div className='list'>
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
      </div> */}

      {
        글제목.map(function(a,i){
          return(
            <div className='list'>

              <h4 onClick={()=>{setModal(!modal), setIndex(i)}}>{글제목[i]}</h4>
              <p>9월 11일 발행</p>
              <button onClick={()=>{
                let copy = [...글제목]
                copy.splice(i,1);
                글제목변경(copy);
              }}>삭제</button>

            </div>
          )
        })
      }


      {
        modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경} index={index}/> : null
      }

      <input onChange={(e)=>{
        입력값변경(e.target.value);
        console.log(입력값);
      }}></input>

      <button onClick={()=>{
        let copy = [...글제목]
        copy.unshift(입력값);
        글제목변경(copy);
      }}>글추가</button>

    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div className='modal'>
        <h4>{props.글제목[props.index]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          props.글제목변경(['여자 코트 추천','강남 우동 맛집','파이썬 독학'])
        }}>글수정</button>
      </div><div></div>
    </>
  )
}

// *** 새로운 컨포넌트에서 해당 state 값을 쓰고싶으면 첫번째작명 받아서 쓰지만, 여기에서도 뭔가 이벤트핸들러를 걸어서 state를 바꿔서 사용해야한다면 두번째작명을 받아서 써야함

// let [따봉, 따봉변경] = useState(0);
// <span onClick={()=>{따봉변경(따봉+1)}}>👍🏻</span> {따봉}
// <span onClick={()=>{변경(원본+1)}}>👍🏻</span> {원본}
// <span onClick={()=>{변경(바꿀값)}}>👍🏻</span> {원본}

export default App;
