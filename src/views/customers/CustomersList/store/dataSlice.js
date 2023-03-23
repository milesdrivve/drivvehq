import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiListCustomers } from 'services/CustomerService'

export const getTableData = createAsyncThunk(
    'customerList/data/getTableData',
    async (data) => {
        //const response = await apiGetCustomerList(data)
        const response = await apiListCustomers(data)
        return response
    }
)

export const initialTableData = {
    total: 0,
    pageIndex: 1,
    pageSize: 50,
    query: '',
    sort: {
        order: '',
        key: '',
    },
}

const dataSlice = createSlice({
    name: 'customerList/data',
    initialState: {
        loading: false,
        orderList: [],
        tableData: initialTableData,
    },
    reducers: {
        setOrderList: (state, action) => {
            state.orderList = action.payload
        },
        setTableData: (state, action) => {
          state.tableData = action.payload
        },
        setFilterData: (state, action) => {
          state.filterData = action.payload
        },
    },
    extraReducers: {
        [getTableData.fulfilled]: (state, action) => {
            state.orderList = action.payload.data?.listCustomers?.items
            state.tableData.total = action.payload.data?.listCustomers?.nextToken || 0
            state.loading = false
        },
        [getTableData.pending]: (state) => {
            state.loading = true
        },
    },
})

export const { setOrderList, setTableData, setFilterData } = dataSlice.actions

export default dataSlice.reducer
