import { useRef, useState } from "react";

const DiaryItem = ({author, content, created_date, emotion, id, onRemove, onEdit})=>{ // props 대신 {받은거}이런식으로도 가능(쓰고자 하는 것들 나열)
                    // DiaryList 에서 받아온것 [...it], onRemove


    const [isEdit, setIsEdit] = useState(false);                
    const toggleIsEdit = ()=>{setIsEdit(!isEdit)} // 스위치처럼 왔다(true)갔다(false)

    const [localContent, setLocalContent] = useState(content); // 초기값셋팅 : 기존에 적혀있던 값 나오도록
    const localContentInput = useRef();

    // * 이벤트핸들러 변수로 빼서 사용
    const handleRemove = ()=>{
        //console.log(id);
        if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
            onRemove(id); //확인 누르면 onRemove 호출해서 id 적용시켜서 보냄
        }
    }

    const handleQuitEdit = ()=>{ 
        setIsEdit(false);
        setLocalContent(content);
    }

    const handleEdit = ()=>{ 
        if(localContent.length < 5){
            localContentInput.current.focus();
            return;
        }

        if(window.confirm(`${id}번째 일기를 수정하시겠습니까?`)){
            onEdit(id, localContent) //확인 누르면 onEidt 호출해서 적용시켜 보냄
            toggleIsEdit(); // 다시 false로
        }
    }

    
    return(             
        <div className="DiaryItem">

            <div className="info">
                <span>작성자 : {author} | 감정점수 : {emotion}</span> <br/>
                <span className="date">{new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="content">

                {
                    // isEdit == true ? (수정원함) : (수정안원함)
                    isEdit === true ? (
                        <>
                            <textarea
                                ref={localContentInput}
                                value={localContent}
                                onChange={(e)=>{setLocalContent(e.target.value)}}/>
                        </>
                    ) : (
                        <>
                            {content}
                        </>
                    )
                }

            </div>

                {
                    // isEdit == true ? (수정원함) : (수정안원함)
                    isEdit === true ? (
                        <>
                            <button onClick={handleQuitEdit}>수정취소</button>
                            <button onClick={handleEdit}>수정완료</button>
                        </>
                    ) : (
                        <>
                            <button onClick={handleRemove}>삭제하기</button>
                            <button onClick={toggleIsEdit}>수정하기</button>
                        </>
                    )
                }

            

        </div>
    )
}

export default DiaryItem;