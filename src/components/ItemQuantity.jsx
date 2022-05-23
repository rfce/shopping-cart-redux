import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import dropIcon from '../assets/images/down-arrow.png'
import { changeItemQuantity } from "../features/cart/cartSlice"

const ItemQuantity = ({ id }) => {
    const quantity = useSelector(
        store => store.cart.items.find(item => item.id == id).quantity
    )

    const dispatch = useDispatch()
    
    // Boolean - select quantity pop-up is open or close
    const [popup, setPopup] = useState(false)

    // Boolean - pop-up should open up-wards or down-wards
    const [upwards, setUpwards] = useState(false)

    // Add event listener for closing pop-up
    useEffect(() => {
        if (popup) {
            document.addEventListener('click', closePopup)
        } else {
            document.removeEventListener('click', closePopup)
        }
		
		return () => {
			document.removeEventListener('click', closePopup)
		}
	}, [popup])

    // Reference to quantity button
    const quantityRef = useRef(null)

    // Wrapper is reference to pop-up div
    // Helps close pop-up if clicked outside of pop-up itself
    const wrapper = useRef(null)

	const closePopup = (event) => {
		// Mouse click outside pop-up div
		if (wrapper.current && !wrapper.current.contains(event.target) && !(event.target.className.includes('popper-button'))) {
			setPopup(false)
		}
	}

    const openPopup = (event) => {
        const dimentions = quantityRef.current.getBoundingClientRect()

        // Open pop-up upwards if enough space
        dimentions.top > 262 ? setUpwards(true) : setUpwards(false)
        
        // Event bubbling
        // Prevents pop-up from re-opening when it is closed
        // Open pop-up only if we clicked on element with class popper-button
        if (event.target.className.includes('popper-button')) {
            setPopup(true)
        }
    }

    function locate() {
        if (popup) {
            if (upwards) {
                return "select-quantity open-upwards"
            }
            return "select-quantity"
        }
        
        return "select-quantity hidden"
    }

    return (
        <div className='item-quantity popper-button' onClick={(event) => openPopup(event)} ref={quantityRef}>
            <p className="popper-button">
                Qty: <span className="popper-button">{quantity}</span>
            </p>
            <img src={dropIcon} className='popper-button' alt='dropdown-arrow' />
            <ul className={locate()} ref={wrapper}>
                {[...Array(10)].map(
                    (_, index) => <li 
                                    key={index}
                                    className={quantity == index + 1 ? "current-quantity" : undefined}
                                    onClick={() => {
                                        setPopup(false)
                                        dispatch(changeItemQuantity({ id, quantity: index + 1 }))
                                    }}
                                >{index + 1}</li>
                )}
            </ul>
        </div>
    )
}

export default ItemQuantity
