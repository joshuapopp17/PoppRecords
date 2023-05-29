import React from 'react'
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useCart from '../hooks/useCart';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    const {addToCart} = useCart()

  return (
    <Stack gap={1} className='mb-5'>
        <Link to={`/product/${item.id}`}>
            <img
              alt=""
              src={item.url}
              className="d-inline-block align-top"
              width={'100%'}
            />
        </Link>
        <h2>{item.title} - {item.size}</h2>
        <h4>{item.artist}</h4>
        <h5>${item.price} + tax</h5>
        <Stack gap={2}>
            <Button variant="outline-secondary" as={Link} 
              to={`/product/${item.id}`}>View Product</Button>
            <Button onClick={() => {addToCart(item)}} style={{backgroundColor: '#FCD12A'}} variant='transparent'>Add to cart</Button>
        </Stack>
    </Stack>
  )
}

export default Item