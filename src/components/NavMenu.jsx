const NavMenu = ({ image, top, bottom }) => {
    return (
        <div className="nav-address">
            {image && <img src={image} alt='location-icon' />}
            <div>
                <p style={{color: image ? undefined : 'white'}}>{top}</p>
                <h4>{bottom}</h4>
            </div>
        </div>
    )
}

export default NavMenu
