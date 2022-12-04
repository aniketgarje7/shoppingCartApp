import React from 'react'
import Row from 'react-bootstrap/Row'
import SingleProduct from './SingleProduct'
import { useSelector } from 'react-redux'

const CartComponent = () => {
    const cartProduct = useSelector((state)=>[...state.cartProduct])
  return (
    <>
    <div style={{margin:'30px'}}>Toatal: {(function(){
        let total=0
        for(let i=0;i<cartProduct.length;i++){
            total+=Number(cartProduct[i].price)
        }
        return total
    })()}</div>
    <Row>
     {cartProduct.map((single,index)=>{
return <SingleProduct single={single}  key={index}/>
     })}</Row>
     </>
  )
}

export default CartComponent