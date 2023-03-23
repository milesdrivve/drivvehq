import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiListReservations } from 'services/ReservationService';

export const getTableData = createAsyncThunk(
    'reservationList/data/getTableData',
    async (data) => {
        //const response = await apiGetReservationList(data)
        const response = await apiListReservations(data)
        console.log(response)
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

export const initialFilterData = {
  pickup_location: ''
}

const dataSlice = createSlice({
    name: 'reservationList/data',
    initialState: {
        loading: false,
        orderList: [],
        tableData: initialTableData,
        filterData: initialFilterData,
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
            state.orderList = action.payload.data?.listReservations?.items
            state.tableData.total = action.payload.total?.listReservations?.nextToken || 0
            state.loading = false
        },
        [getTableData.pending]: (state) => {
            state.loading = true
        },
    },
})

export const { setOrderList, setTableData, setFilterData } = dataSlice.actions

export default dataSlice.reducer
