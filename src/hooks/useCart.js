import React, { createContext, useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const CartContext = createContext({})

const ITEMS = [
    {
        id: "10001",
        title: "Rezzett LP",
        artist: "Rezzett",
        price: "39.99",
        description: "Rezzett's debut album is dark and ethereal. A sound almost indescribable.",
        size: "12\"",
        genre: "Electronic",
        url: "https://f4.bcbits.com/img/a4012014681_10.jpg"
    },
    {
        id: "10002",
        title: "Ultrakunst",
        artist: "Brutalismus 3000",
        price: "31.99",
        description: "With the release of ‘ULTRAKUNST‘, the duo has highlighted their “nu-gabber-post-techno-punk” style, whilst creating some of their hardest and most notable sounds to take over dancefloors. ‘ULTRAKUNST’ is indeed ultra-art.",
        size: "12\"",
        genre: "Electronic",
        url: "https://f4.bcbits.com/img/a3500023291_10.jpg"
    },
]

const COUPONS = [
    {
        title: "SAVE30",
        amount: .30  
    }
]

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [items] = useState(ITEMS)

    const addedToCart = () => toast('Added to cart.');
    const removedFromCart = () => toast('Removed from cart.');
    const couponApplied = () => toast('Coupon applied.');

    const getItem = async (id) => {
        console.log(id)
        for (const item of ITEMS) {
            if (item.id == id) {
                return item
            }
        }
        return false
    }

    const addToCart = async (item) => {
        var temp = cart
        temp.push(item)
        setCart(temp)
        getTotal()
        addedToCart()
    }

    const removeFromCart = (index) => {
        var temp = cart
        temp.splice(index,1)
        setCart(temp)
        getTotal()
        removedFromCart()
    }

    const getTotal = () => {
        var total = 0.0
        for (const item of cart) {
            total += +(item.price)
        }
        setTotal(total)
    }

    const applyCoupon = (title) => {
        console.log(title)
        for (const item of COUPONS) {
            if (item.title == title) {
                setTotal(total * 1 - item.amount)
                couponApplied()
            }
        }
    }

    console.log(items)

    return (
        <CartContext.Provider value={{cart, items, getItem, setCart, addToCart, removeFromCart, getTotal, total}}>
            {children}
        </CartContext.Provider>
    )
}

export default function useCart() {
    return useContext(CartContext);
}