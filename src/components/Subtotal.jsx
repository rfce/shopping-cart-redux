import { useSelector } from "react-redux"
import ItemPrice from "./ItemPrice"

const Subtotal = () => {
    const itemsCount = useSelector(state => state.cart.itemsCount)
    const bill = useSelector(state => state.cart.bill)

    return (
        <div className="subtotal">
            <h3>
                Subtotal ({itemsCount} items):
            </h3>
            <ItemPrice price={bill} />
        </div>
    )
}

export default Subtotal
