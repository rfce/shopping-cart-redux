import { createSlice } from "@reduxjs/toolkit";
import items from '../../assets/data/Items'

const initialState = {
    items: items,
    itemsCount: 0,
    bill: { rupee: 0, paise: 0 },
    containsGift: false,
    savedItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        removeItem: (state, {payload}) => {
            // Delete items with zero quantity
            state.items = state.items.filter(item => item.quantity)

            state.savedItems = state.savedItems.filter(item => item.saved)

            // Set zero quantity for clicked item
            const target = state.items.find(item => item.id == payload)
            target.quantity = 0
            target.gift = false
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
                total += (rupee + (paise / 100)) * item.quantity

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
        },
        changeItemQuantity: (state, {payload}) => {
            const {id, quantity} = payload
            const target = state.items.find(item => item.id == id)
            target.quantity = quantity
        },
        saveForLater: (state, {payload}) => {
            // Delete items with zero quantity
            state.items = state.items.filter(item => item.quantity)

            state.savedItems = state.savedItems.filter(item => item.saved)

            const target = state.items.find(item => item.id == payload)
            
            state.savedItems.unshift(target)
          
            target.saved = true
            target.quantity = 0
            target.gift = false
        },
        deleteFromSaved: (state, {payload}) => {
            state.savedItems = state.savedItems.filter(item => item.saved)

            // Delete items with zero quantity
            state.items = state.items.filter(item => item.quantity)

            const target = state.savedItems.find(item => item.id == payload)
            target.saved = false
        },
        moveToCart: (state, {payload}) => {
            // Delete items with zero quantity
            state.items = state.items.filter(item => item.quantity)

            state.savedItems = state.savedItems.filter(item => item.saved)

            const target = state.savedItems.find(item => item.id == payload)

            target.quantity = 1
            target.saved = false

            state.items.unshift(target)
        }
    }
})

export const {
    removeItem, 
    toggleGift, 
    calculateBill, 
    toggleAllGifts, 
    evaluateGifts, 
    changeItemQuantity,
    saveForLater,
    deleteFromSaved,
    moveToCart
} = cartSlice.actions

export default cartSlice.reducer
