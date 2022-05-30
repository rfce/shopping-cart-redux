const ItemDeleted = ({title, saved}) => {
    return (
        <div className='deleted-item'>
            <a>
                {title.length > 64 ? title.slice(0, 64) + "..." : title}
            </a> <span>{saved ? "has been moved to Save For Later." : "was removed from Shopping Cart."}</span>
        </div>
    )
}

export default ItemDeleted
