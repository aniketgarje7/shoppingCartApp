import React from 'react'
import Col from 'react-bootstrap/Col';
import {Card,ListGroup,Button} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux';
import { setChange,remove} from '../Redux/action';

const SingleProduct = ({single}) => {
  const cartProduct = useSelector((state)=>[...state.cartProduct])
  const setCartProduct = useDispatch()
  return (
    <Col>
         <Card style={{ width: '18rem', marginBottom:'15px',marginTop:'15px' }}>
    <Card.Img variant="top" src={single.image} alt='no image fond' />
    <Card.Body>
      <Card.Title>{single.Name}</Card.Title>
      
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Rating   {single.price}</ListGroup.Item>
     
    </ListGroup>
    <Card.Body>
      {cartProduct.includes(single)?
      <Button variant='dark' onClick={
        ()=>setCartProduct(remove(single))}>Remove from the cart</Button>:
        <Button variant='dark' onClick={()=>setCartProduct(setChange(single))}> Add to cart</Button>}
    </Card.Body>
  </Card>
        </Col>
  )
}

export default SingleProduct