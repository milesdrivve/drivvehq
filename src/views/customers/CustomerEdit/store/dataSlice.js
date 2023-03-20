import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    apiGetCustomerDetails, apiGetCustomer
} from 'services/CustomerService'

/*export const getProduct = createAsyncThunk(
    'CustomerEdit/data/getProducts',
    async (data) => {
        const response = await apiGetCustomerDetails(data)
        return response.data
    }
)*/

export const getProduct = createAsyncThunk(
  'CustomerEdit/data/getProducts',
  async (data) => {
      //const response = await apiGetCustomerDetails(data)
      const response = await apiGetCustomer(data)
      console.log('getProduct...')
      console.log(data)
      console.log(getProduct)
      return response.data
  }
)


/*export const updateProduct = async (data) => {
    const response = await apiPutCustomer(data)
    return response.data
}*/

/*export const deleteProduct = async (data) => {
    const response = await apiDeleteSalesProducts(data)
    return response.data
}*/

const dataSlice = createSlice({
    name: 'customerEdit/data',
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
