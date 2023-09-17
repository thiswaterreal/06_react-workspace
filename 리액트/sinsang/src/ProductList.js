import { Navbar, Nav, Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import ProductItem from './ProductItem';

const ProductList = ({ productList, onRemove})=>{
    return(
        <div className="ProductList">
            
            <br></br>
            <p><span style={{color:"#007fff", fontWeight:"bold"}}>{productList.length}</span>개의 상품이 있습니다.</p>
            <div>
            <Container>
                <Row style={{width:"1500px"}}>
                {
                    productList.map((it, idx)=>{

                        return(
                          
                            <ProductItem key={it.id} {...it} onRemove={onRemove}/>
                            
                        )

                    })
                }
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default ProductList;