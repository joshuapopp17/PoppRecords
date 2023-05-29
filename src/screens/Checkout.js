import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Spinner, Stack } from 'react-bootstrap'
import useCart from '../hooks/useCart'
import { Link, useParams } from 'react-router-dom'

const CheckoutItem = ({item, index}) => {
    const {removeFromCart} = useCart()

    return (
        <div>
            <Stack direction='horizontal' gap={3} className='mb-5'>
                <Link to={`/product/${item.id}`}>
                    <img
                      alt=""
                      src={item.url}
                      className="d-inline-block align-top"
                      width={150}
                    />
                </Link>
                <div>
                <h3>{item.title} - {item.size}</h3>
                <h4>{item.artist}</h4>
                <h5>${item.price} + tax</h5>
                <Stack gap={2}>
                    <Button onClick={() => {removeFromCart(index)}} variant="outline-danger">Remove</Button>
                </Stack>
                </div>
             </Stack>
        </div>
    )
}

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)
    var tax = .1
    var shipping = 12.99
    const {items, getItem, removeFromCart, getTotal, total, cart} = useCart()
    let { id } = useParams();

    useEffect(() => {
        (async () => {
            setLoading(true)
            const item = await getTotal(id)
            if (item) {
                setItem(item)
                setLoading(false)
                setLoading(false)
            }
        })()
    }, [])

  return (
    <div>
        <Row>
            <Col sm="6">
                {cart.length == 0 ? <h1>No items</h1> : cart.map((item, index) => {
                    return <CheckoutItem item={item} index={index} key={index}></CheckoutItem>
                })}
            </Col>
            <Col sm="6">
                <Stack gap={2}>
                    <h1>Checkout</h1>
                    <h3>Subtotal: {cart.length == 0 ? "..." :  "$" +(total).toFixed(2)}</h3>
                    <h4 style={{color: '#777'}}>Tax: {loading ? cart.length == 0 ? "..." :  "$" +(total * tax).toFixed(2) : " calculating ..."}</h4>
                    <h4 style={{color: '#777'}}>Shipping: {loading ?  cart.length == 0 ? "..." : "$" + shipping : " calculating ..."}</h4>
                    <h2 style={{fontWeight: 700}}>Total: {cart.length == 0 ? "..." : "$"+((total + (total * tax)) + shipping).toFixed(2)}</h2>
                    <Button as={Link} to='/checkout' onClick={() => alert("not implemented")} style={{backgroundColor: '#FCD12A'}} variant='transparent'>Go to Checkout</Button>
                </Stack>
            </Col>
        </Row>
    </div>
    )
}

export default Checkout