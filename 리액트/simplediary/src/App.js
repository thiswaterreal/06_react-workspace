import { useRef, useState } from 'react';
import './App.css';

import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

import Lifecycle from './Lifecycle';

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

  // 일기를 담아줄 state (모든 곳에 쓸 수 있도록 App에 만드루)
  const [data, setData] = useState([]); // 빈 배열

  const dataId = useRef(0);   // 왜 0으로 하지 않을까? => 어떤 state 변동시, App가 랜더링되는데 그때마다 0으로 초기화시키면 dataId값이 항상 0으로 초기화됨
                              // 왜 useState(0)으로 하지 않을까? => useState로 만들면 state 변동시 랜더링.. dataId가 바뀔때마다 랜더링돼서 꼬임
                              //    useRef(0)는 state가 변동되어도 랜더링x (F5새로고침시에만 초기화됨)


  const onCreate = (author, content, emotion)=>{  //받을것들(DiaryEditor.js 에서 저장할 때 보내줄 예정)
    const created_date = new Date().getTime();
    const newItem = { //하나로
      author,
      content,
      emotion,
      created_date,
      id : dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data]) // 변경함수 호출(새로운일기 + 기존일기) == 요렇게 일기데이터 생성!!
  }

  const onRemove = (targetId)=>{  //받을것들(DiaryItem.js 에서 삭제할 때 id값 보내줄 예정)
    console.log(`${targetId}가 삭제됐습니다.`);
    const newDiaryList = data.filter((it)=> it.id !== targetId); // data에 있는 id를 하나씩 꺼내서 비교(삭제하려는 id가 아닌id의 데이터들만 다시 담아서)
    setData(newDiaryList); // 변경함수 호출해서 갈아끼우기
  }


  const onEdit = (targetId, newContent)=>{ //수정완료
    setData(
        // data.map((it)={ it.id === targetId ? 어떤수정(기존전체촥깔고,바꿀거갈아끼우기) : 원래를 지키면 됨})
        data.map((it)=>( it.id === targetId ? {...it, content:newContent} : it ))
    )
  }

  return (
    // DiaryEditor에서 저장할 떄 onCreate함수를 써야하니까 보내줌
    // DiaryList에는 일기 줘야 보여줄테니까 data보내줌 | 삭제할 때 onDelete함수를 써야하니까 보내줌
    <div className="App">
      <Lifecycle/>
      <DiaryEditor onCreate={onCreate}></DiaryEditor>
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit}></DiaryList>
    </div>
  );
}

export default App;
