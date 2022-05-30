const BestSeller = ({category}) => {
    const is_bestseller = category.bestseller

    return is_bestseller ? (
        <div className='item-bestseller'>
            <i>#1 Best Seller</i>
            <span>in {category.value}</span>
        </div>
    ) : null
}

export default BestSeller
