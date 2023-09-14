import { useState } from "react";

const FriendItem = ({id, name, hobby, birth, onDelete, onEdit})=>{
    
    const [isEdit, setIsEdit] = useState(false);
    const [localName, setLocalName] = useState(name);
    const [localHobby, setLocalHobby] = useState(hobby);
    const [localBirth, setLocalBirth] = useState(birth);
    
    const toggleIsEdit = ()=>{setIsEdit(!isEdit)}

    const handleRemove = ()=>{
        if(window.confirm(`${id}번째 친구를 정말 삭제하시겠습니까?`)){
            onDelete(id);
        }
    }

    const handleQuitEdit = ()=>{ 
        setIsEdit(false);
        setLocalName(name);
        setLocalName(hobby);
        setLocalName(birth);
    }

    const handleEdit = ()=>{ 
    
        if(window.confirm(`${id}번째 일기를 수정하시겠습니까?`)){
            onEdit(id, localName, localHobby, localBirth) //확인 누르면 onEidt 호출해서 적용시켜 보냄
            toggleIsEdit(); // 다시 false로
        }
    }

    return(

        // <tr>
        //     <td>{id}</td>
        //     <td>{name}</td>
        //     <td>{hobby}</td>
        //     <td>{birth}</td>
        //     <td>
        //         <button onClick={()=>{handleRemove}}>삭제</button>
        //     </td>
        // </tr>


       <tr>
            <td>{id}</td>
            <td>
                {
                    isEdit === true ? (
                        <>
                            <input
                                value={localName}
                                onChange={(e)=>{setLocalName(e.target.value)}}/>
                        </>
                    ) : (
                        <>
                            {name}
                        </>
                    )
                }
            </td>
            <td>
                {
                    isEdit === true ? (
                        <>
                            <input
                                value={localHobby}
                                onChange={(e)=>{setLocalHobby(e.target.value)}}/>
                        </>
                    ) : (
                        <>
                            {hobby}
                        </>
                    )
                }
            </td>
            <td>
                {
                    isEdit === true ? (
                        <>
                            <input
                                type="date"
                                value={localBirth}
                                onChange={(e)=>{setLocalBirth(e.target.value)}}/>
                        </>
                    ) : (
                        <>
                            {birth}
                        </>
                    )
                }
            </td>
            <td>
              

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
            </td>
       </tr>
    )
}

export default FriendItem;