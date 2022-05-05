import { useSelector } from 'react-redux'
import SingleItem from './SingleItem'

const ItemList = () => {
    const {items, bill} = useSelector(store => store.cart)

    return (
        <div className="item-container">
            <div className="items">
                <h2>Shopping Cart</h2>
                <div className="items-list">
                    {items.map(item => <SingleItem key={item.id} {...item} />)}
                </div>
                <div className="subtotal">
                    Subtotal
                </div>
            </div>
            <div className="proceed-buy">
                2
            </div>
        </div>
    )
}

export default ItemList
