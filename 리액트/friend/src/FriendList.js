import FriendItem from "./FriendItem";

const FriendList = ({ onDelete, friendList })=>{ // 부모한테 받은거
    console.log(friendList);
    return(
        <div className="FriendList">
            
            <table style={{margin:'auto'}}>
                <tr>
                  <th width="80">번호</th>
                  <th width="80">이름</th>
                  <th width="80">취미</th>
                  <th width="100">생일</th>
                  <th width="80">기타</th>
                </tr>
                {
                    friendList.map((it, idx)=>(
                        <FriendItem key={it.num} {...it} onDelete={onDelete}></FriendItem>
                    ))
                }
            </table>
        </div>
    )
}

// undefined 처리
FriendList.defaultProps={
    friendList : []
}

export default FriendList;