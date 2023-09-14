
import FriendItem from "./FriendItem";

const FriendList = ({friendList, onDelete, onEdit})=>{
    return(
        <div className="FriendList">
            <table>
                <tr>
                    <th width="80">번호</th>
                    <th width="80">이름</th>
                    <th width="80">취미</th>
                    <th width="100">생일</th>
                    <th width="80">기타</th>
                </tr>

                {
                    friendList.map((it, idx)=>{
                        return(

                            <FriendItem key={it.id} {...it} onDelete={onDelete} onEdit={onEdit}/>
                            
                        )
                    })
                }
            </table>
        </div>
    )
}

// undefined 처리
FriendList.defaultProps={
    friendList:[]
}

export default FriendList;