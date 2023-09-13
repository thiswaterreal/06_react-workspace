import DiaryItem from "./DiaryItem";

const DiaryList = ({ onDelete, diaryList })=>{ // props 대신 diaryList. (부모한테 받은거)
    console.log(diaryList);
    return(
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {
                    diaryList.map((it, idx)=>( // {return()} 대신 ()  // 이렇게도 props 전달 가능
                   
                        <DiaryItem key={it.id} {...it} onDelete={onDelete}/>

                    ))
                }
            </div>
        </div>
    )
}




// undefined 처리
// App.js에서 <DiaryList diaryList={undefined}></DiaryList>
DiaryList.defaultProps={
    diaryList : []
}

export default DiaryList;





//언니....
//안녕!!!
//수업 잘 들어!!
