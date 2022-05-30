const ItemDescription = ({description}) => {
    return description ? (
        description.map((looks, index) => (
            <div key={index} className='item-description'>
                <h5>{looks.property}:</h5>
                <p>{looks.value}</p>
            </div>
        ))
    ) : null
}

export default ItemDescription
