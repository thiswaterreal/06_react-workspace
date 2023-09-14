import { useRef, useState } from "react";

const FriendEditor = ({onCreate})=>{

    // const nameInput = useRef();
    // const hobbyInput = useRef();
    // const birthInput = useRef();

    const [state, setState] = useState({
        name:"",
        hobby:"",
        birth:"",
    })

    const handleChangeState = (e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = ()=>{
        console.log(state);
        onCreate(state.name, state.hobby, state.birth);
        alert("새로운 친구 성공!!");
        setState({
            name:"",
            hobby:"",
            birth:"",
        })
    }

    return(
        <div className="FriendEditor">
            <div>
                이름 :
                <input
                    name="name"
                    value={state.name}
                    onChange={handleChangeState}
                    //ref={nameInput}
                />
            </div>
            <div>
                취미 :
                <input
                    name="hobby"
                    value={state.hobby}
                    onChange={handleChangeState}
                    //ref={hobbyInput}
                />
            </div>
            <div>
                생일 :
                <input
                    type="date"
                    name="birth"
                    value={state.birth}
                    onChange={handleChangeState}
                    //ref={birthInput}
                />
            </div>
            <div>
                <button onClick={handleSubmit}>등록완료</button>
            </div>
        </div>
    )
}

export default FriendEditor;