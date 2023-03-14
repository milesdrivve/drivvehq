import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    apiGetCustomerDetails,
    //apiDeleteCrmCustomer,
    //apiPutCustomer,
} from 'services/CustomerService'

export const getCustomer = createAsyncThunk(
    'customerDetails/data/getCustomer',
    async (data) => {
        const response = await apiGetCustomerDetails(data)
        return response.data
    }
)

/*export const deleteCustomer = createAsyncThunk(
    'customerDetails/data/deleteCustomer',
    async (data) => {
        const response = await apiDeleteCrmCustomer(data)
        return response.data
    }
)*/

/*export const putCustomer = createAsyncThunk(
    'customerDetails/data/putCustomer',
    async (data) => {
        const response = await apiPutCustomer(data)
        return response.data
    }
)*/

const dataSlice = createSlice({
    name: 'customerDetails/data',
    initialState: {
        loading: false,
        profileData: {},
        subscriptionData: [],
    },
    reducers: {
        updateProfileData: (state, action) => {
            state.profileData = action.payload
        },
    },
    extraReducers: {
        [getCustomer.fulfilled]: (state, action) => {
            state.loading = false
            state.profileData = action.payload
            state.subscriptionData = action.payload?.subscription || []
        },
        //[deleteCustomer.fulfilled]: () => {},
        //[putCustomer.fulfilled]: () => {},
        [getCustomer.pending]: (state) => {
            state.loading = true
        },
    },
})

export const { updateProfileData } = dataSlice.actions

export default dataSlice.reducer
