import logo from './logo.svg';
import './App.css';

import data from './data.js';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';


function App() {

  let [friend, setFriend] = useState(data);
  let [inputs, setInputs] = useState({
    num: '',
    name: '',
    hobby: '',
    birthday: ''
  });

  let onChange = (e) => {
    let { value, name } = e.target; 
    setInputs({
      ...inputs, 
      [name]: value 
    });
  };

  let navagate = useNavigate();

  return (
    <div className="App">
      <>

        <Routes>
          <Route path="/" element={
            <>
              <h2>내짝꿍</h2>
              <Link to="/plus">친구추가하기</Link>/
              <Link to="/">메인으로 가기</Link>
              <table style={{margin:'auto'}}>
                <tr>
                  <th width="80">번호</th>
                  <th width="80">이름</th>
                  <th width="80">취미</th>
                  <th width="100">생일</th>
                  <th width="80">기타</th>
                </tr>

                {/* <tr>
                  <td>3</td>
                  <td>이수진</td>
                  <td>밥먹기</td>
                  <td>2000-01-01</td>
                  <td><button>삭제</button></td>
                </tr> */}

                {
                  friend.map((a, i)=>{
                    return(
                      <Card friend={friend} i={i} setFriend={setFriend}/>
                    )
                  })
                }

              </table>
            </>
          }>
          </Route>

          <Route path="/plus" element={
            <>
              <h2>내짝꿍</h2>
              <Link to="/plus">친구추가하기</Link>/
              <Link to="/">메인으로 가기</Link>
              <div>친구추가</div>
              번호 : <input name='num' onChange={onChange} type='text'></input> <br/>
              이름 : <input name='name' onChange={onChange} type='text'></input> <br/>
              취미 : <input name='hobby' onChange={onChange} type='text'></input> <br/>
              생일 : <input name='birthday' onChange={onChange} type='date'></input> <br/>
              <button onClick={()=>{
                let copy = [...friend]
                copy.push(inputs);
                setFriend(copy);

                navagate('/');
              }}>추가</button>
            </>
          }>
          </Route>
        </Routes>

      </>  
    </div>
  );
}

// 컴포넌트
function Card(props) {
  return(
    <tr>
      <td>{props.friend[props.i].num}</td>
      <td>{props.friend[props.i].name}</td>
      <td>{props.friend[props.i].hobby}</td>
      <td>{props.friend[props.i].birthday}</td>
      <td>
        <button onClick={()=>{
        let copy = [...props.friend];
        copy.splice(props.i, 1);
        props.setFriend(copy);
        }}>삭제</button>
      </td>
    </tr>
  )
}




export default App;
