import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const ProductDetail = ({data, onRemove, onEdit}) => {
  //console.log({data});
  let { id } = useParams();
  //let data = props.data; (props 로 안할꺼니까 막기)

  // id에 해당하는 상품 정보를 찾기
  const product = data.find(item => item.id === parseInt(id));

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = ()=>{setIsEdit(!isEdit)}

  const [localBrand, setLocalBrand] = useState(product.brand);
  const [localName, setLocalName] = useState(product.name);
  const [localPrice, setLocalPrice] = useState(product.price);
  const [localImg, setLocalImg] = useState(product.img);



  const handleRemove = ()=>{
    if(window.confirm(`${product.id}번째 상품을 정말 삭제하시겠습니까?`)){
        onRemove(product.id);
    }
  }

  const handleQuitEdit = ()=>{
    setIsEdit(false);
    setLocalBrand(product.brand);
    setLocalName(product.name);
    setLocalPrice(product.price);
    setLocalImg(product.Img);
  }

  const handleEdit = ()=>{
    if(window.confirm(`${product.id}번째 상품을 정말 수정하시겠습니까?`)){
        onEdit(product.id, localBrand, localName, localPrice, localImg);
        toggleIsEdit();
    }
  }



  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="ProductDetail">
        <h2 style={{marginTop:"20px"}}>신상품 수정란✍🏻</h2>
        {
            isEdit === true ? (
                <>
                <div>
                    <img src={product.img}/>
                </div>
                <div> 
                    <input style={{width:"400px", height:"45px"}}
                        value={localBrand}
                        onChange={(e)=>{setLocalBrand(e.target.value)}}
                    />
                </div>
                <div>
                    <input style={{width:"400px", height:"45px"}}
                        value={localName}
                        onChange={(e)=>{setLocalName(e.target.value)}}
                    />
                </div>
                <div>
                    <input style={{width:"400px", height:"45px"}}
                        value={localPrice}
                        onChange={(e)=>{setLocalPrice(e.target.value)}}
                    />
                </div>
                <div>
                    <input style={{width:"400px", height:"45px"}}
                        value={localImg}
                        onChange={(e)=>{setLocalImg(e.target.value)}}
                    />
                </div>
                </>
            ) : (
                <>
                <table>
                    <tr>
                        <img src={product.img}/>  
                    </tr>
                    <tr className='tr1'>
                        <p style={{color:"yellowgreen", fontWeight:"bold", fontSize:"20px" ,lineHeight:"30px", margin:"5px"}}>{product.brand}</p>
                    </tr>
                    <tr className='tr1'>
                        <p style={{color:"gray", fontWeight:"bold", fontSize:"20px" ,lineHeight:"30px", margin:"5px"}}>{product.name}</p>
                    </tr>
                    <tr className='tr1'>
                        <p style={{color:"gray", fontWeight:"bold", fontSize:"20px" ,lineHeight:"30px", margin:"5px"}}>{product.price}원</p>
                    </tr>
                </table>
                </>
            )
        }


        {
            // isEdit == true ? (수정원함) : (수정안원함)
            isEdit === true ? (
                <div style={{marginTop:"20px"}}>
                    <button onClick={handleQuitEdit}>수정취소</button>
                    <button onClick={handleEdit} style={{backgroundColor:"orange", color:"white"}}>수정완료</button>
                </div>
            ) : (
                <div style={{marginTop:"20px"}}>
                    <button onClick={handleRemove} style={{backgroundColor:"tomato", color:"white"}}>삭제하기</button>
                    <button onClick={toggleIsEdit} style={{backgroundColor:"orange", color:"white"}}>수정하기</button>
                </div>
            )
        }


        
        {/* <table>
            <tr>
                <img src={product.img}/>  
            </tr>
            <tr className='tr1'>
                <p style={{color:"yellowgreen", fontWeight:"bold"}}>{product.brand}</p>
            </tr>
            <tr className='tr1'>
                <h4>{product.name}</h4>
            </tr>
            <tr className='tr1'>
                <p>{product.price}원</p>
            </tr>
            <tr className='tr1'>
                <button style={{backgroundColor:"orange", color:"white"}}>상품수정</button>
            </tr>
            <tr className='tr1'>
                <button onClick={handleRemove} style={{backgroundColor:"tomato", color:"white"}}>상품삭제</button>
            </tr>
        </table> */}

    </div>
  );
}

export default ProductDetail;
