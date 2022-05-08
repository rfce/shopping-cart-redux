import { useSelector } from "react-redux"
import dropIcon from '../assets/images/down-arrow.png'

const ItemQuantity = ({ id }) => {
    const quantity = useSelector(
        store => store.cart.items.find(item => item.id == id).quantity
    )

    return (
        <div className='item-quantity'>
            <p>
                Qty: <span>{quantity}</span>
            </p>
            <img src={dropIcon} alt='dropdown-arrow' />
        </div>
    )
}

export default ItemQuantity
