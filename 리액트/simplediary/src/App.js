import { useRef, useState } from 'react';
import './App.css';

import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';


// const dummyList = [
//   {
//     id:1,
//     author:"이수진",
//     content:"하이 1",
//     emotion:5,
//     created_date:new Date().getTime()
//   },
//   {
//     id:2,
//     author:"류현수",
//     content:"하이 2",
//     emotion:3,
//     created_date:new Date().getTime()
//   },
//   {
//     id:3,
//     author:"선생님",
//     content:"하이 3",
//     emotion:2,
//     created_date:new Date().getTime()
//   },
// ]

function App() {

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion)=>{  //받아서(이정도는줘라)
    const created_date = new Date().getTime();
    const newItem = { //하나로
      author,
      content,
      emotion,
      created_date,
      id : dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data]) // 새로운일기 + 기존일기
  }

  const onDelete = (targetId)=>{
    console.log(`${targetId}가 삭제됐습니다.`);
    const newDiaryList = data.filter((it)=> it.id !== targetId);
    setData(newDiaryList);
  }


  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}></DiaryEditor>
      <DiaryList diaryList={data} onDelete={onDelete}></DiaryList>
    </div>
  );
}

export default App;
