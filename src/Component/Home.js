import React from 'react'
import {faker} from '@faker-js/faker'

import {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SingleProduct from './SingleProduct';


const Home = () => {
    faker.seed(100)
    
   const productArry = [...Array(20)].map(()=>({
    image:faker.image.animals(640,480,true),
    Name:faker.commerce.productName(),
    price:faker.commerce.price()
   }
   ))
   const [product] = useState([...productArry]);
console.log(product)
  return <Container>
  <Row>
     {product.map((single,index)=>{
return <SingleProduct single={single}  key={index}/>
     })}</Row>
  
  </Container>
}

export default Home