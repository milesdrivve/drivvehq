import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//import { apiGetSalesOrders, apiDeleteSalesOrders } from 'services/SalesService'
import { apiGetFleetList } from 'services/FleetService'

export const getOrders = createAsyncThunk(
    'fleetList/data/getOrders',
    async (data) => {
        const response = await apiGetFleetList(data)
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
    name: 'fleetList/data',
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
    },
    extraReducers: {
        [getOrders.fulfilled]: (state, action) => {
            state.orderList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getOrders.pending]: (state) => {
            state.loading = true
        },
    },
})

export const { setOrderList, setTableData } = dataSlice.actions

export default dataSlice.reducer
