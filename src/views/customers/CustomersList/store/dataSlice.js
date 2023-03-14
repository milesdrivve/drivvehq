import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetCustomerList } from 'services/CustomerService';

export const getTableData = createAsyncThunk(
    'customerList/data/getTableData',
    async (data) => {
        const response = await apiGetCustomerList(data)
        return response.data
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
            state.orderList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getTableData.pending]: (state) => {
            state.loading = true
        },
    },
})

export const { setOrderList, setTableData, setFilterData } = dataSlice.actions

export default dataSlice.reducer
