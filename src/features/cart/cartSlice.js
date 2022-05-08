import { createSlice } from "@reduxjs/toolkit";
import items from '../../assets/data/Items'

const initialState = {
    items: items,
    itemsCount: 0,
    bill: { rupee: 0, paise: 0 },
    containsGift: false
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
        },
        calculateBill: (state, action) => {
            let count = 0
            let total = 0

            // Calculate total amount and items count
            state.items.forEach(item => {
                const { rupee, paise } = item.price
                total += rupee + (paise / 100)

                count += item.quantity
            })
            
            const [final_rupee, final_paise] = String(total.toFixed(2)).split('.')

            state.itemsCount = count
            
            state.bill = {
                rupee: Number(final_rupee), paise: Number(final_paise)
            }
        },
        toggleAllGifts: (state, {payload}) => {
            state.items.forEach(item => {
                item.gift = payload
            })
            state.containsGift = payload
        },
        evaluateGifts: (state, action) => {
            state.containsGift = state.items.some(item => item.gift)
        }
    }
})

export const {removeItem, toggleGift, calculateBill, toggleAllGifts, evaluateGifts} = cartSlice.actions

export default cartSlice.reducer
