const DiaryItem = ({author, content, created_date, emotion, id, onDelete})=>{ // props 대신 {받은거}이런식으로도 가능(쓰고자 하는 것들 나열)
    return(             // DiaryList 에서 받아온것 [...it], onDelete
        <div className="DiaryItem">

            <div className="info">
                <span>작성자 : {author} | 감정점수 : {emotion}</span> <br/>
                <span className="date">{new Date(created_date).toLocaleString()}</span>
            </div>ㄴ
            <div className="content">{content}</div>
            <button onClick={()=>{
                //console.log(id);
                if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
                    onDelete(id); //확인 누르면 onDelete함수 호출해서 id 적용시켜서 보냄
                }
            }}>삭제</button>

        </div>
    )
}

export default DiaryItem;