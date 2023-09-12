import logo from './logo.svg';
import './App.css';

import data from './data.js';
import { useState } from 'react';

function App() {

  let [friend, setFriend] = useState(data);

  return (
    <div className="App">
        <h2>내짝꿍</h2>
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
