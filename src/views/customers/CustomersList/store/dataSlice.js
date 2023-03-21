import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiListCustomers } from 'services/CustomerService'

export const getTableData = createAsyncThunk(
    'customerList/data/getTableData',
    async (data) => {
        //const response = await apiGetCustomerList(data)
        console.log('getTableData...')
        const response = await apiListCustomers()
        console.log('done getTableData...')
        console.log(response)
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
          console.log('setTableData')
          console.log(action.payload)
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
            console.log('1')
            console.log(state.orderList)
        },
        [getTableData.pending]: (state) => {
            state.loading = true
            console.log('2')
            console.log(state)
        },
    },
})

export const { setOrderList, setTableData, setFilterData } = dataSlice.actions

export default dataSlice.reducer
