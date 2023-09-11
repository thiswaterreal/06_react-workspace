/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //let [logo, setLogo] =  useState('ReactBlog');  // 자주 바뀌지 않는 것들은 굳이 state로 하지x
  let post = '강남 우동 맛집';

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  //let [따봉, 따봉변경] = useState(0);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  let [index, setIndex] = useState(0); 


  return (
    <div className="App">

        <Nav/>

        {/* <button onClick={ ()=>{글제목변경(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학'])} }>버튼</button> */}
        <button onClick={ ()=>{
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
        } }>버튼</button>

        <button onClick={ ()=>{
          let order = [...글제목];
          //order = order.sort();
          order.sort();
          글제목변경(order);
        } }>가나다순 정렬</button>
        

        
        {/* <div className='list'>                   
          <h4>{글제목[0]} <span onClick={ ()=>{따봉변경(따봉+1)} }>👍🏻</span> {따봉} </h4>
          <p>9월 11일 발행</p>
        </div>
        <div className='list'>
          <h4>{글제목[1]}</h4>
          <p>9월 11일 발행</p>
        </div>
        <div className='list'>
          <h4>{글제목[2]} <span onClick={()=>{setModal(!modal)}}>🔽</span> </h4>
          <p>9월 11일 발행</p>
        </div> */}
        {/* <h4>{글제목[2]} <span onClick={()=>{setModal(modal==true ? false : true)}}>🔽</span> </h4> */}


        {
          글제목.map(function(a, i){ // a : 값 자체, i : 인덱스
            return (
              <div className='list'>
                <h4 onClick={()=>{ 
                  setIndex(i);
                  setModal(!modal) }}>{글제목[i]}<span onClick={ ()=>{
                    let copy = [...따봉];
                    copy[i] = copy[i] + 1;
                    따봉변경(copy);
                } }>👍🏻</span> {따봉[i]} </h4>
                <p>9월 11일 발행</p>
              </div>
            )
          })
        }


        {
          modal==true ? <Modal color={'skyblue'} 글제목={글제목} 글제목변경={글제목변경} 인덱스={index}
                                onClick={ ()=>{
                                  let copy = [...글제목];
                                  copy[0] = '여자 코트 추천';
                                  글제목변경(copy);
                                } }
                                
                                
                                /> : null
                                
                                
        }

        

    </div>
  );
  

}

// 컴포넌트 맹글기 (첫 대문자!)
function Modal(props) {
  return(
    <>
      <div className='modal' style={{background : props.color}}>
        
        <h4>{props.글제목[props.인덱스]}</h4>
       
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={ ()=>{props.글제목변경(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학'])} }>글수정</button>
        {/* <button onClick={ ()=>{props.onClick();} }>글수정</button> */}
      </div><div></div>
    </>
  )
}

function Nav() {
  return(
    <div className="black-nav">
            <h4>ReactBlog</h4>
    </div>
  )
}




export default App;


/*
    * JSX 문법 특징
    1. class 속성 부여할 땐 className 으로 부여할 것
    2. 변수 넣을 땐 {중괄호}
    3. style 속성 부여할 땐 style={{스타일명:'값'}} 로 표현할 것
       <h4 id={post} style={{color:'red', fontSize:'20px'}}>블로그다</h4>
    4. 이벤트 핸들러 달 때는 안에 함수 이름을 넣어야 한다(onclick, hover, ..)
       function 함수(){
        console.log(1);
       }
       <h4>{글제목[0]} <span onClick={ 함수 }>👍🏻</span> {따봉} </h4>
       <h4>{글제목[0]} <span onClick={ function 함수(){console.log(1)} }>👍🏻</span> {따봉} </h4>
       <h4>{글제목[0]} <span onClick={ ()=>{}) }>👍🏻</span> {따봉} </h4>


    * state 만드는 법
    1. import{useState}
    2. useState(보관할 자료)
    3. let [작명, 작명]
           > 첫번째 : state 에 보관했던 자료 나옴
           > 두번째 : state 변경 함수

    * state 사용 이유
      > 일반변수  : 변경되면 html 자동렌더링 안됨
      > state    : 변경되면 html 자동렌더링 됨

    * state 언제 쓰나?
      > 변동시, 자동으로 html에 반영되게 만들고 싶다면 state 사용할 것!

    * state 변경하는 법
      > state변경함수(새로운 state의 값)
      > state변경함수==두번째작명함수

    * state 변경함수 특징
      > 기존 state == 신규 state의 경우 변경 안해줌

    * array / object 특징
      > array / object 담은 변수에는 주소값만 저장됨

    => 결론, 독립적인 copy본은 만들어서 변경해줘야함
    1. 원본복사한다
    2. 바꾼다
    3. 두번째작명함수 불러서 진짜 바꾼다

    * 컴포넌트 만드는 법
    1. function 만들고
    2. return () 안에 html 담기
    3. <함수명></함수명> 쓰기

    * 컴포넌트로 만들면 좋은 것
    1. 반복적인 html 축약할 때
    2. 큰 페이지들
    3. 자주 변경되는 것들 (modal 속만 한번 변경하면 되니까)

    * 컴포넌트의 단점
    1. state 가져다 쓸 때 문제가 생김(각각 컴포넌트별로 취급해서 만들어둔 state 끌어다 쓸 수 x)

    * 동적인 UI 만드는 방법
    1. HTML, CSS로 미리 디자인 완성
    2. UI의 현재상태를 state로 저장
    3. state에 따라 UI가 어떻게 보일지 작성

    * map 함수 특징1
    1. array 자료 갯수만큼 함수 안의 코드를 실행해준다.
    2. 함수의 파라미터는 array안에 있던 자료임
    3. return문에 값을 적으면 array에 담아줌

    * map 함수 특징2 (state와 함께 썼을 때)
    1. 왼쪽 array 자료만큼 내부코드 실행해줌
    2. return (html 코드) <= html코드를 array로 담아줌 | [div안녕, div안녕]
    3. 유용한 파라미터 2개 사용 가능

    부모 -> 자식 state 전송하는 법
    1. <자식컴포넌트 작명={state이름}>
    2. props 파라미터 등록
    3. props.작명 사용
*/


