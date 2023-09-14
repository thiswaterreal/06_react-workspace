
import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import dataDummy from './data';
import FriendList from './FriendList';
import FriendEditor from './FriendEditor';

function App() {

  let navigate = useNavigate();

  const [data, setData] = useState(dataDummy);

  const onDelete = (targetId)=>{ //onDelete 함수는 targetId라는 매개변수를 받음. targetId : 삭제하려는 항목의 고유 식별자
    //console.log(`${targetId}가 삭제됐습니다.`);
    const newFriendList = data.filter((it)=> it.id !== targetId); // it : 메소드 내에서 현재 반복 중인 객체요소를 가리키는 변수
    setData(newFriendList);
  }

  const dataId = useRef(4); //기존 데이터 3개 있으니까

  const onCreate = (name, hobby, birth)=>{
    const newItem = {
      name,
      hobby,
      birth,
      id : dataId.current,
    }
    dataId.current += 1
    setData([...data, newItem])
    navigate("/list");
  }

  const onEdit = (targetId, newName, newHobby, newBirth) => {
    setData((prevData) =>
      prevData.map((it) =>
        it.id === targetId
          ? { ...it, name: newName, hobby: newHobby, birth: newBirth }
          : it
      )
    );
  };


  return (
    <div className="App">
      
      <Link to="/">홈</Link>/
      <Link to="/regist">등록하기</Link>/
      <Link to="/list">리스트보기</Link>

      <Routes>
        <Route path="/" element={<h2>홈화면이지요</h2>}/>
        <Route path="/regist" element={
          <>
            <div>등록하기</div>
            <FriendEditor onCreate={onCreate}/>
          </>
          }/>
        <Route path="/list" element={
          <>
            <div>리스트보기</div>
            <FriendList friendList={data} onDelete={onDelete} onEdit={onEdit}/>
          </>
        }/>
      </Routes>

    </div>
  );
}

export default App;
