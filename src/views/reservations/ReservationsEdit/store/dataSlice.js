import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  apiGetReservationDetails
} from 'services/ReservationService'

export const getProduct = createAsyncThunk(
    'reservationsEdit/data/getProducts',
    async (data) => {
        const response = await apiGetReservationDetails(data)
        return response.data
    }
)

/*export const updateProduct = async (data) => {
    const response = await apiPutSalesProduct(data)
    return response.data
}

export const deleteProduct = async (data) => {
    const response = await apiDeleteSalesProducts(data)
    return response.data
}*/

const dataSlice = createSlice({
    name: 'reservationsEdit/data',
    initialState: {
        loading: false,
        productData: [],
    },
    reducers: {},
    extraReducers: {
        [getProduct.fulfilled]: (state, action) => {
            state.productData = action.payload
            state.loading = false
        },
        [getProduct.pending]: (state) => {
            state.loading = true
        },
    },
})

export default dataSlice.reducer
