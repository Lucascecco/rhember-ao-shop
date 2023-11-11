import cartImg from '../../assets/shopping_cart.svg'
import { useContext } from 'react'
import { Context } from '../../context/CartContext'

export default function CartWidget() {
    const cartContext = useContext(Context)

    return (
        <>
            <div className='d-flex align-items-center'>
                    <span className='fw-bolder'>{cartContext.cart.length}</span> <img src={cartImg} height={32}></img>
            </div>
        </>
    )
}