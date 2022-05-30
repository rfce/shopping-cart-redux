import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { deleteFromSaved, moveToCart } from '../features/cart/cartSlice'
import ItemPrice from './ItemPrice'
import BestSeller from './BestSeller'
import fulfilledIcon from '../assets/images/amazon-fulfilled.png'
import ItemDescription from './ItemDescription'

const Saved = () => {
    const savedItems = useSelector(store => store.cart.savedItems, shallowEqual)

    const dispatch = useDispatch()

    const item_count = savedItems.filter(item => item.saved).length

    return savedItems.length ? (
        <div className="saved-items">
            {item_count ? <h2>Saved for later ({item_count} item{item_count > 1 && 's'})</h2> : <h2>No items saved for later</h2>}
            
            <div className="si-container">
                {savedItems.map(item => {
                    return item.saved ? (
                        <div className="si-item" key={item.id}>
                            <img src={item.image} alt="item-image" />
                            <div className='si-title'>
                                <h3 className="item-title">
                                    {item.title.length > 53 ? item.title.slice(0, 53).trim() + '...' : item.title}
                                </h3>
                            </div>
                            {item.author && <p className="item-author">by {item.author}</p>}
                            <ItemPrice price={item.price} />
                            <BestSeller category={item.category} />
                            {item.type && <p className="item-type">{item.type}</p>}
                            <p className="item-remaining">In stock</p>
                            {item.price.rupee > 499 && (
                                <p className="item-shipping">Eligible for FREE Shipping</p>
                            )}
                            <img src={fulfilledIcon} alt='Amazon fulfilled icon' />
                            <ItemDescription description={item.description} />
                            <button onClick={() => dispatch(moveToCart(item.id))}>Move to cart</button>
                            <h4 onClick={() => dispatch(deleteFromSaved(item.id))}>Delete</h4>
                            <h4>See more like this</h4>
                        </div>
                    ) : (
                        <div className="si-item" key={item.id}>
                            <div className='si-deleted'>
                                <h5>{item.quantity ? "Moved to Cart" : "Removed"}</h5>
                                <p>
                                    <span>{item.title.length > 64 ? item.title.slice(0, 64).trim() + '...' : item.title}</span> {item.quantity ? "has been moved to Shopping Cart." : "was removed from Save For Later."}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    ) : null
}

export default Saved
