import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { calculateBill, evaluateGifts } from '../features/cart/cartSlice'
import SingleItem from './SingleItem'
import Subtotal from './Subtotal'

const ItemList = () => {
    const itemQuantities = useSelector(
        store => store.cart.items.map(item => item.quantity),
        shallowEqual
    )

	const dispatch = useDispatch()

	useEffect(() => {
        dispatch(evaluateGifts())
		dispatch(calculateBill())
	}, [itemQuantities])

    return (
        <div className="items">
            <h2>Shopping Cart</h2>
            <div className="items-list">
                {itemQuantities.map(
                    (_, index) => <SingleItem key={index} index={index} />
                )}
            </div>
            <Subtotal />
        </div>
    )
}

export default ItemList
