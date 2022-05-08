const ItemDeleted = ({title}) => {
    return (
        <div className='deleted-item'>
            <a>
                {title.length > 64 ? title.slice(0, 64) + "..." : title}
            </a> <span>was removed from Shopping Cart.</span>
        </div>
    )
}

export default ItemDeleted
