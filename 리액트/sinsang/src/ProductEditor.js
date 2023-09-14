import { useRef, useState } from "react";


const ProductEditor = ()=>{

    // const brnadInput = useRef();
    // const nameInput = useRef();
    // const priceInput = useRef();
    // const imgInput = useRef();


    const [state, setState] = useState({
        brand:"",
        name:"",
        price:"",
        img : "",
    })

    const handleChangeState = (e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = ()=>{
        alert("입력하신 상품이 등록되었습니다!!");
        setState({
            brand:"",
            name:"",
            price:"",
            img : "",
        })
    }

    return(
        <div className="ProductEditor">
            <h2>신상품 등록란</h2>
            <div>
                유통회사 : 
                <input
                    name="brand"
                    value={state.brand}
                    onChange={handleChangeState}
                />
            </div>
            <div>
                상품명 : 
                <input
                    name="name"
                    value={state.name}
                    onChange={handleChangeState}
                />
            </div>
            <div>
                가격 : 
                <input
                    name="price"
                    value={state.price}
                    onChange={handleChangeState}
                />
            </div>
            <div>
                상품 이미지 주소 :
                <input
                    name="img"
                    value={state.img}
                    onChange={handleChangeState}
                />
            </div>
            <div>
                <button onClick={handleSubmit}>등록하기</button>
            </div>
        </div>
    )
}

export default ProductEditor;