import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'customerDetails/state',
    initialState: {
        editCustomerDetailDialog: false,
        selectedCard: {},
    },
    reducers: {
        openEditCustomerDetailDialog: (state) => {
            state.editCustomerDetailDialog = true
        },
        closeEditCustomerDetailDialog: (state) => {
            state.editCustomerDetailDialog = false
        },
        updateSelectedCard: (state, action) => {
            state.selectedCard = action.payload
        },
    },
})

export const {
    openEditCustomerDetailDialog,
    closeEditCustomerDetailDialog,
    updateSelectedCard,
} = stateSlice.actions

export default stateSlice.reducer
