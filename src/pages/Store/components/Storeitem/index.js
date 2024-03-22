import React from 'react'
import styled from 'styled-components'
import { useShoppingCart } from '../../../../context/ShoppingCartContext'

const Box = styled.div`

`
const Titlebox = styled.div`

`

const Imgbox = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    aspect-ratio: 1/0.5;
`
const Btn = styled.button`
    padding: 15px 20px;
    border-radius: 10px;
    background: #000;
    color: #FFF;
    cursor: pointer;
`

const Storeitem = ({id,img,title,price}) => {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
        <Box>
            <Imgbox img={img} />
            <Titlebox>
                {title} - {price}$
            </Titlebox>
            
            {quantity === 0 ? <Btn onClick={()=> increaseCartQuantity(id)}>+ Add To Cart</Btn> : 
            <><Btn onClick={()=> decreaseCartQuantity(id)}>-</Btn>
            <span>{quantity}</span>
            <Btn onClick={()=> increaseCartQuantity(id)}>+</Btn>
            <Btn onClick={()=> removeFromCart(id)}>Remove</Btn></>}
        </Box>
    )
}

export default Storeitem