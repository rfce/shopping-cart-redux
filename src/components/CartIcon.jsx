import { useSelector } from 'react-redux'
import cartIcon from '../assets/images/cart-icon.png'

const CartIcon = () => {
    const itemsCount = useSelector(store => store.cart.itemsCount)

    return (
        <div className="cart-icon">
            <h4>{itemsCount}</h4>
            <img src={cartIcon} alt='cart-icon' />
            <p>Cart</p>
        </div>
    )
}

export default CartIcon
