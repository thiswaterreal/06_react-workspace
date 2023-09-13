const FriendItem = ({name, hobby, birthday, num, onDelete})=>{
    return(
       
           
                <tr>
                    <td>{num}</td>
                    <td>{name}</td>
                    <td>{hobby}</td>
                    <td>{birthday}</td>
                    <td>
                        <button onClick={()=>{
                            if(window.confirm(`${num}번째 일기를 정말 삭제하시겠습니까?`)){
                                onDelete(num); // 확인 누르면 App.js 에 있는 onDelete로
                            }
                        }}>삭제</button>
                    </td>
                </tr>
           
            
    )
}

export default FriendItem;