import hamburger from '../assets/images/hamburger.png'

const Header = () => {
    return (
        <div className="nav-base">
            <p>
                <img src={hamburger} alt='hamburger-menu' />
                All
            </p>
            <p>Best Sellers</p>
            <p>Mobiles</p>
            <p>Customer Service</p>
            <p>Today's Deals</p>
            <p>Fashion</p>
            <p>Electronics</p>
            <p>Prime</p>
            <p>Home & Kitchen</p>
            <p>New Releases</p>
            <p>Amazon Pay</p>
            <p>Computers</p>
            <p>Books</p>
            <p>Clearance store</p>
            <p>Coupons</p>
        </div>
    )
}

export default Header
