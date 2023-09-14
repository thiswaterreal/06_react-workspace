const FriendItem = ({id, name, hobby, birth, onDelete})=>{
    return(
       <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{hobby}</td>
            <td>{birth}</td>
            <td>
                <button onClick={()=>{
                    if(window.confirm(`${id}번째 친구를 정말 삭제하시겠습니까?`)){
                        onDelete(id);
                    }
                }}>삭제</button>
            </td>
       </tr>
    )
}

export default FriendItem;