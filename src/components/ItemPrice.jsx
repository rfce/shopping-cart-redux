const ItemPrice = ({ price }) => {
    const {rupee, paise} = price
    
    return (
        <div className="price-container">
            <span>₹</span>
            <span className="item-price">{rupee.toLocaleString()}</span>
            <span>{("0" + paise).slice(-2)}</span>
        </div>
    )
}

export default ItemPrice
