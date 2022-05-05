import { createSlice } from "@reduxjs/toolkit";
import items from '../../assets/data/Items'

const initialState = {
    items: items,
    itemsCount: 0,
    bill: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        removeItem: (state, {payload}) => {
            state.items = state.items.filter(item => item.id != payload)
        },
        toggleGift: (state, {payload}) => {
            const target = state.items.find(item => item.id == payload)
            target.gift = !target.gift
        }
    }
})

export const {removeItem, toggleGift} = cartSlice.actions

export default cartSlice.reducer
