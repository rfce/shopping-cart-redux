import { useSelector, useDispatch } from "react-redux"
import { toggleAllGifts } from "../features/cart/cartSlice"

const ContainsGiftCheckbox = () => {
    const containsGift = useSelector(store => store.cart.containsGift)

    const dispatch = useDispatch()

    return (
        <div className='contains-gift'>
            <input
                type='checkbox' 
                id='contains-gift'
                name='contains-gift'
                value={containsGift}
                checked={containsGift}
                onChange={event => dispatch(toggleAllGifts(event.target.checked))}
            />
            <label htmlFor="contains-gift">This order contains a gift</label>
        </div>
    )
}

export default ContainsGiftCheckbox
