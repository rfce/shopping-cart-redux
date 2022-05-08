import Subtotal from './Subtotal'
import tickIcon from '../assets/images/green-tick.png'
import ContainsGiftCheckbox from './ContainsGiftCheckbox'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='sidebar-container'>
                <div className='sidebar-header'>
                    <img src={tickIcon} alt='Green tick icon' />
                    <h5>Your order is eligible for FREE Delivery.</h5>
                    <p>
                        Select this option at checkout. <a>Details</a>
                    </p>
                </div>
                <Subtotal />
                <ContainsGiftCheckbox />
                <button className='proceed-buy'>Proceed to Buy</button>
            </div>
        </div>
    )
}

export default Sidebar
