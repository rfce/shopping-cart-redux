import { useDispatch, useSelector } from "react-redux"
import { evaluateGifts, toggleGift } from "../features/cart/cartSlice"

const IsGiftCheckbox = ({ id }) => {
    const isGift = useSelector(
        store => store.cart.items.find(item => item.id == id).gift
    )

    const dispatch = useDispatch()

    return (
        <div className='gift-item'>
            <input 
                type="checkbox" 
                id={`gift-item-${id}`} 
                name={`gift-item-${id}`}  
                value={isGift} 
                checked={isGift} 
                onChange={() => {
                    dispatch(toggleGift(id))
                    dispatch(evaluateGifts())
                }}
            />
            <label htmlFor={`gift-item-${id}`}>This will be a gift</label>
            <a>Learn more</a>
        </div>
    )
}

export default IsGiftCheckbox
