import ItemPrice from './ItemPrice'
import fulfilledIcon from '../assets/images/amazon-fulfilled.png'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { removeItem, saveForLater } from '../features/cart/cartSlice'
import IsGiftCheckbox from './IsGiftCheckbox'
import ItemQuantity from './ItemQuantity'
import ItemDeleted from './ItemDeleted'
import BestSeller from './BestSeller'
import ItemDescription from './ItemDescription'

const SingleItem = ({ index }) => {
    const {
        id, 
        title, 
        image, 
        author, 
        price, 
        type, 
        quantity, 
        category,
        description,
        saved
    } = useSelector(store => {
        return {
            ...store.cart.items[index],
            gift: undefined
        }
    }, shallowEqual)

    const dispatch = useDispatch()

    return quantity ? (
        <div className="single-item">
            <img src={image} alt="item-image" />
            <div>
                <h3 className="item-title">{title}</h3>
                {author && <p className="item-author">by {author}</p>}
                <ItemPrice price={price} />
                <BestSeller category={category} />
                {type && <p className="item-type">{type}</p>}
                <p className="item-remaining">In stock</p>
                {price.rupee > 499 && (
                    <p className="item-shipping">Eligible for FREE Shipping</p>
                )}
                <img src={fulfilledIcon} alt='Amazon fulfilled icon' />
                <IsGiftCheckbox id={id} />
                <ItemDescription description={description} />
                <div className='item-controllers'>
                    <ItemQuantity id={id} />
                    <h4 onClick={() => dispatch(removeItem(id))}>Delete</h4>
                    <h4 onClick={() => dispatch(saveForLater(id))}>Save for later</h4>
                    <h4>See more like this</h4>
                </div>
            </div>
        </div>
    ) : <ItemDeleted title={title} saved={saved} />
}

export default SingleItem
