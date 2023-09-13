const DiaryItem = ({author, content, created_date, emotion, id, onDelete})=>{ // props 대신 {넘긴거}이런식으로도 가능(쓰고자 하는 것들 나열) 그럼 props. 계속 안적어줘도 됨
    return(             // DiaryList 에서 받아온것 [...it], onDelete
        <div className="DiaryItem">

            <div className="info">
                <span>작성자 : {author} | 감정점수 : {emotion}</span>
                <br/>
                <span className="date">{new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="content">{content}</div>
            <button onClick={()=>{
                if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
                    onDelete(id); //확인 누르면 App.js에 있는 onDelete로
                }
            }}>삭제</button>

        </div>
    )
}

export default DiaryItem;