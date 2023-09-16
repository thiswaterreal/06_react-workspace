import { useParams } from 'react-router-dom';

const ProductDetail = ({data, onRemove}) => {
    console.log({data});
  let { id } = useParams();
  //let data = props.data; (props 로 안할꺼니까 막기)

  // id에 해당하는 상품 정보를 찾기
  const product = data.find(item => item.id === parseInt(id));

  const handleRemove = ()=>{
    if(window.confirm(`${id}번째 상품을 정말 삭제하시겠습니까?`)){
        onRemove(id);
    }
  }

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="ProductDetail">
        <table>
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
                <button onClick={handleRemove}>상품삭제</button>
            </tr>
        </table>
    </div>
  );
}

export default ProductDetail;
