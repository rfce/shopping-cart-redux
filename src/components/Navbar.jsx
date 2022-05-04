import Header from './Header'
import SearchBar from "./SearchBar"
import NavMenu from './NavMenu'
import cartIcon from '../assets/images/cart-icon.png'
import logo from '../assets/images/amazon-logo.png'
import locationIcon from '../assets/images/location-icon.png'
import flagIcon from '../assets/images/india-flag.png'

const Navbar = () => {
	return (
		<>
			<div className="navbar">
				<div className="logo">
					<img src={logo} alt='amazon-logo' />
					<p>.in</p>
				</div>
				<NavMenu 
					image={locationIcon} 
					top={'Hello'} 
					bottom={'Select your address'} 
				/>
				<SearchBar />
				<div className='flag-icon'>
					<img src={flagIcon} alt='india-flag' />
				</div>
				<NavMenu 
					image={false} 
					top={'Hello, Sign in'} 
					bottom={'Account & Lists'} 
				/>
				<NavMenu 
					image={false} 
					top={'Returns'} 
					bottom={'& Orders'} 
				/>
				<div className="cart-icon">
					<h4>1</h4>
					<img src={cartIcon} alt='cart-icon' />
					<p>Cart</p>
				</div>
			</div>
			<Header />
		</>
	)
}

export default Navbar
