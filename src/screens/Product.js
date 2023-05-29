import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Spinner, Stack } from 'react-bootstrap'
import useCart from '../hooks/useCart'
import { Link, useParams } from 'react-router-dom'

const Product = () => {
    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)
    const {items, getItem, addToCart} = useCart()
    let { id } = useParams();

    useEffect(() => {
        (async () => {
            setLoading(true)
            const item = await getItem(id)
            if (item) {
                setItem(item)
                setLoading(false)
            }
        })()
    }, [])
  return (
    <div>
        <Button className='mb-4' variant="outline-secondary" as={Link} 
                        to='/'>Back to shop</Button>
        {loading ? <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}><Spinner></Spinner></div> :
        <Row>
            <Col sm="6" className='mb-4'>
                <img
                  alt=""
                  src={item?.url}
                  className="d-inline-block align-top"
                  width={'100%'}
                />
            </Col>
            <Col sm="6">
                <Stack gap={2}>
                    <h1>{item?.title} - {item?.size}</h1>
                    <h2>{item?.artist}</h2>
                    <h3>${item?.price} + tax</h3>
                    <Stack direction='horizontal' gap={2}>
                        <Button onClick={() => addToCart(item)} style={{backgroundColor: '#FCD12A'}} variant='transparent'>Add to cart</Button>
                        <Button variant="outline-secondary" as={Link} 
                        to='/checkout'>Go to Cart</Button>
                    </Stack>
                    <h3>{item?.description}</h3>
                    <h5 style={{color: '#777'}}>Genre: {item?.genre}</h5>
                </Stack>
            </Col>
        </Row>}
    </div>
  )
}

export default Product