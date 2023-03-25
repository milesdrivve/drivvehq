import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiListCars } from 'services/FleetService'

export const getTableData = createAsyncThunk(
    'carsList/data/getTableData',
    async (data) => {
        const response = await apiListCars(data)
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
    name: 'carList/data',
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
            state.orderList = action.payload.data?.listCars?.items
            state.tableData.total = action.payload.data?.listCars?.nextToken || 0
            state.loading = false
        },
        [getTableData.pending]: (state) => {
            state.loading = true
        },
    },
})

export const { setOrderList, setTableData, setFilterData } = dataSlice.actions

export default dataSlice.reducer
