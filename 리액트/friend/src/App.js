import './App.css';

import { useRef, useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import data1 from './data.js';

import FriendEditor from './FriendEditor';
import FriendList from './FriendList';

function App() {

  let navigate = useNavigate();

  const [data, setData] = useState(data1);

  const dataNum = useRef(4); // 기존 3명있으니까

  const onCreate = (name, hobby, birthday)=>{
    const newItem = {
      name,
      hobby,
      birthday,
      num : dataNum.current
    }
    dataNum.current += 1;
    setData([...data, newItem]) // 새로운데이터 + 기존데이터
    navigate("/"); // 추가하고 메인으로 가기
  }

  const onDelete = (targetNum)=>{
    console.log(`${targetNum}가 삭제됐습니다.`);
    const newFriendList = data.filter((it)=> it.num !== targetNum);
    setData(newFriendList);
  }


  data.sort((a, b) => a.num - b.num); // 숫자정렬

  
  return (
    <div className="App">
      <>
      <h2>내짝꿍</h2>
      <Link to="/plus">친구추가하기</Link>/
              <Link to="/">메인으로 가기</Link>
        <Routes>
          <Route path="/" element={
            <>
              
              
             

             
                <FriendList friendList={data} onDelete={onDelete}></FriendList>
            
            </>
          }>
          </Route>

          <Route path="/plus" element={
            <>
              
              
              <div>친구추가</div>
              
              <FriendEditor onCreate={onCreate}></FriendEditor>
             

            </>
          }>
          </Route>
        </Routes>

      </>  
    </div>
  );
}


export default App;
