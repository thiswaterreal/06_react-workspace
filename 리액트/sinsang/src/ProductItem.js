import { useState } from 'react';
import { Navbar, Nav, Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';

const ProductItem = ({brand, name, price, img, idx})=>{

    let [따봉, 따봉변경] = useState([0,0,0,0]);
    return(
        <Col sm>
            <img src={img} width="80%"/>
            <p>{brand}</p>
            <h4>{name}</h4>
            <p>{price}원</p>
            <span onClick={(e)=>{
                e.stopPropagation();
                let copy = [...따봉];
                copy[idx] = copy[idx] + 1;
                따봉변경(copy);
            }}>😋</span> {따봉[idx]}
        </Col>
    )
}

export default ProductItem;