import { useRef, useState } from "react";

const FriendEditor = ({onCreate})=>{ //App.js에서 준 함수

    const nameInput = useRef();
    const hobbyInput = useRef();
    const birthdayInput = useRef();

    const [state, setState] = useState({
        name:"",
        hobby:"",
        birthday:""
    });

    const handleChangeState = (e)=>{
        //console.log(e.target.value); //이수진
        //console.log(e.target.name);  //name

        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = ()=>{
        //console.log(state);

        onCreate(state.name, state.hobby, state.birthday);
        alert("친구 추가 성공!!");
        setState({
            name:"",
            hobby:"",
            birthday:"",
        })
    }

    return (
        <div className="FriendEditor">
            <div>
                이름 : 
                <input
                    name="name"
                    value={state.name}
                    onChange={handleChangeState}
                    ref={nameInput}
                />
            </div>
            <div>
                취미 : 
                <input
                    name="hobby"
                    value={state.hobby}
                    onChange={handleChangeState}
                    ref={hobbyInput}
                />
            </div>
            <div>
                생일 : 
                <input
                    name="birthday"
                    value={state.birthday}
                    onChange={handleChangeState}
                    ref={birthdayInput}
                    type="date"
                />
            </div>
            <div>
                <button onClick={handleSubmit}>추가</button>
            </div>

        </div>
    )

}

export default FriendEditor;