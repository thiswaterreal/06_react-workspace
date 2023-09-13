import DiaryItem from "./DiaryItem";

const DiaryList = ({ onDelete, diaryList })=>{ // props 대신 {diaryList} /(부모한테 받은거)
    console.log(diaryList);
    return(
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {
                    diaryList.map((it, idx)=>{ // {return()} 대신 ()  // 이렇게도 props 전달 가능
                        
                        return (
                            <>
                            {/* 
                            <div key={it.id}> 
                                <div>작성자 : {it.author}</div>
                                <div>일기 : {it.content}</div>
                                <div>감정 : {it.emotion}</div>
                                <div>작성 시간(ms) : {it.created_date}</div>
                            </div> 
                            */}

                            {/* map 돌릴때, F12에 key값 똑같다고 난리부르스 치면 => key값 주기(보통 해당번호id로 줌) */}
                            <DiaryItem key={it.id} {...it} onDelete={onDelete}/>

                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}


// undefined 처리 (DiaryList 가 0개일 경우 처리)
// App.js에서 <DiaryList diaryList={undefined}></DiaryList>
DiaryList.defaultProps={
    diaryList : []
}

export default DiaryList;





//언니....
//안녕!!!
//수업 잘 들어!!
