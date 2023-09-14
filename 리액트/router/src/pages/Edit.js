import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = ()=>{

    const navigate = useNavigate(); // 어떤 이벤트를 마치고, 원하는 곳으로 보내기 위해 사용
    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get('id');
    console.log(id);

    const mode = searchParams.get('mode');
    console.log(mode);

    return(
        <div>
            <h1>Edit</h1>
            <p>이곳은 일기 수정 화면 입니다.</p>
            <button onClick={()=>{
                navigate('/home')
            }}>HOME 으로 가기</button>
            <button onClick={()=>{
                navigate(-1)
            }}>뒤로가기</button>
        </div>
    )
}

export default Edit;