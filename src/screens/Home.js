import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Item from '../components/Item'
import useCart from '../hooks/useCart'

const Home = () => {
    const {items} = useCart()

  return (
    <div>
        <Row>
            {items?.map((item, index) => {
                return <Col sm='4'><Item item={item} key={index}></Item></Col>
            })}
        </Row>
    </div>
  )
}

export default Home