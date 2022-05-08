import ItemPrice from './ItemPrice'
import fulfilledIcon from '../assets/images/amazon-fulfilled.png'
import dropIcon from '../assets/images/down-arrow.png'
import { useDispatch } from 'react-redux'
import { removeItem, toggleGift } from '../features/cart/cartSlice'

const SingleItem = (props) => {
    const {
        id, 
        title, 
        image, 
        author, 
        price, 
        type, 
        gift, 
        quantity, 
        category,
        description
    } = props

    const dispatch = useDispatch()

    return (
        <div className="single-item">
            <img src={image} alt="item-image" />
            <div>
                <h3 className="item-title">{title}</h3>
                {author && <p className="item-author">by {author}</p>}
                <ItemPrice price={price} />
                {category.bestseller && (
                    <div className='item-bestseller'>
                        <i>#1 Best Seller</i>
                        <span>in {category.value}</span>
                    </div>
                )}
                {type && <p className="item-type">{type}</p>}
                <p className="item-remaining">In stock</p>
                {price.rupee > 499 && (
                    <p className="item-shipping">Eligible for FREE Shipping</p>
                )}
                <img src={fulfilledIcon} alt='Amazon fulfilled icon' />
                <div className='gift-item'>
                    <input 
                        type="checkbox" 
                        id={`gift-item-${id}`} 
                        name={`gift-item-${id}`}  
                        value={gift} 
                        checked={gift} 
                        onChange={() => dispatch(toggleGift(id))}
                    />
                    <label htmlFor={`gift-item-${id}`}>This will be a gift</label>
                    <a>Learn more</a>
                </div>
                {description && description.map((looks, index) => (
                    <div key={index} className='item-description'>
                        <h5>{looks.property}:</h5>
                        <p>{looks.value}</p>
                    </div>
                ))}
                <div className='item-controllers'>
                    <div className='item-quantity'>
                        <p>
                            Qty: <span>{quantity}</span>
                        </p>
                        <img src={dropIcon} alt='dropdown-arrow' />
                    </div>
                    <h4 onClick={() => dispatch(removeItem(id))}>Delete</h4>
                    <h4>Save for later</h4>
                    <h4>See more like this</h4>
                </div>
            </div>
        </div>
    )
}

export default SingleItem
