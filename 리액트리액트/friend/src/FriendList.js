
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

                            <FriendItem key={it.id} {...it} onDelete={onDelete} onEdit={onEdit}/> // key : 목록 렌더링할때 각 객체요소들 식별할 수 있도록 key값 제공해야함!!
                            
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