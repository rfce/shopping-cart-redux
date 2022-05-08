import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateBill } from '../features/cart/cartSlice'
import SingleItem from './SingleItem'
import Subtotal from './Subtotal'

const ItemList = () => {
    const items = useSelector(store => store.cart.items)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(calculateBill())
	}, [items])

    return (
        <div className="items">
            <h2>Shopping Cart</h2>
            <div className="items-list">
                {items.map(item => <SingleItem key={item.id} {...item} />)}
            </div>
            <Subtotal />
        </div>
    )
}

export default ItemList
