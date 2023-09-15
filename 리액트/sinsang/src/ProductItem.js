import { useState } from 'react';
import { Navbar, Nav, Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';

const ProductItem = ({brand, name, price, img, id, onRemove})=>{

    const [count, setCount] = useState(0);

    const handleRemove = ()=>{
        if(window.confirm(`${id}번째 상품을 정말 삭제하시겠습니까?`)){
            onRemove(id);
        }
    }

    const like = ()=>{
        setCount(count + 1);
    }
 
    return(
        <Col sm={3}>
            <img src={img} width="80%"/>
            <p style={{color:"yellowgreen", fontWeight:"bold"}}>{brand}</p>
            <h4>{name}</h4>
            <span onClick={like}>😋: </span>{count}
            <p>{price}원</p>
            <button onClick={handleRemove}>상품삭제</button>
        </Col>
    )
   
}

export default ProductItem;