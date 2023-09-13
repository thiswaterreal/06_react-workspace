import { useRef, useState } from "react"; // useRef : 조건 안맞게 작성시, focus 주기 위해


const DiaryEditor = ({onCreate})=>{ //App.js 에서 준 함수

    //const [author, setAuthor] = useState("");
    //const [content, setContent] = useState("");

    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author:"",
        content:"",
        emotion:1,
    });


    const handleChangeState = (e)=>{ // 현재 이벤트 발생한 그것!!e
        //console.log(e.target.value); //이수진
        //console.log(e.target.name);  //author

        setState({
            ...state,                           // 일단 전체 촥 뿌려주고( 모두 초기 빈 문자열 상태),
            [e.target.name]:e.target.value,     // author건드린 경우, '입력값의 [키]:벨류' 로 덮어씌움   //[author]:이수진
        })
    }

    const handleSubmit = ()=>{
        //console.log(state);

        if(state.author.length < 1){
            //alert("작성자는 최소 1글자 이상 입력해주세요");
            authorInput.current.focus();
            return;
        }

        if(state.content.length < 5){
            //alert("일기 본문은 최소 5글자 이상 입력해주세요");
            contentInput.current.focus();
            return;
        }
        onCreate(state.author, state.content, state.emotion); //App.js onCreate로
        alert("저장 성공!!");
        setState({ // 성공했으면 비워두기
            author:"",
            content:"",
            emotion:1,
        })
    }

    return (
        <div className="DiaryEditor">
            <h2>오늘날 수쟌의 일기</h2>
            <div>
                <input
                    name="author"
                    value={state.author}        // 처음 : "" (이벤트발생 후 재랜더링됨) 나중 : "이수진"
                    onChange={handleChangeState}
                    ref={authorInput}
                />
            </div>
            <div>
                <textarea 
                    name="content"
                    value={state.content}
                    onChange={handleChangeState}
                    ref={contentInput}
                />
            </div>
            <div>
                오늘의 감정점수 : 
                <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장 눌루</button>
            </div>
        </div>
    ) 
}

export default DiaryEditor;