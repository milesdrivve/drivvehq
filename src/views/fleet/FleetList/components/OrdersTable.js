import React, { useEffect, useCallback, useMemo } from 'react'
//import { Badge, Tooltip } from 'components/ui'
import { DataTable } from 'components/shared'
//import { HiOutlineEye, HiOutlineTrash } from 'react-icons/hi'
//import NumberFormat from 'react-number-format'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders, setTableData } from '../store/dataSlice'
import {
    setSelectedRows,
    addRowItem,
    removeRowItem,
    //setDeleteMode,
    //setSelectedRow,
} from '../store/stateSlice'
//import useThemeClass from 'utils/hooks/useThemeClass'
//import { useNavigate } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
//import dayjs from 'dayjs'

/*const OrderColumn = ({ row }) => {
    const { textTheme } = useThemeClass()
    const navigate = useNavigate()

    const onView = useCallback(() => {
        navigate(`/app/sales/order-details/${row.id}`)
    }, [navigate, row])

    return (
        <span
            className={`cursor-pointer select-none font-semibold hover:${textTheme}`}
            onClick={onView}
        >
            #{row.id}
        </span>
    )
}*/

/*const ActionColumn = ({ row }) => {
    const dispatch = useDispatch()
    const { textTheme } = useThemeClass()
    const navigate = useNavigate()

    const onDelete = () => {
        dispatch(setDeleteMode('single'))
        dispatch(setSelectedRow([row.id]))
    }

    const onView = useCallback(() => {
        navigate(`/app/sales/order-details/${row.id}`)
    }, [navigate, row])
}*/

const OrdersTable = () => {
    const dispatch = useDispatch()
    const { pageIndex, pageSize, sort, query, total } = useSelector(
        (state) => state.fleetList.data.tableData
    )
    const loading = useSelector((state) => state.fleetList.data.loading)
    const data = useSelector((state) => state.fleetList.data.orderList)

    const fetchData = useCallback(() => {
        dispatch(getOrders({ pageIndex, pageSize, sort, query }))
    }, [dispatch, pageIndex, pageSize, sort, query])

    useEffect(() => {
        dispatch(setSelectedRows([]))
        fetchData()
    }, [dispatch, fetchData, pageIndex, pageSize, sort])

    const tableData = useMemo(
        () => ({ pageIndex, pageSize, sort, query, total }),
        [pageIndex, pageSize, sort, query, total]
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'Supplier',
                accessor: 'Supplier',
            },
            {
                Header: 'Type',
                accessor: 'Type'
            },
            {
              Header: 'Class',
              accessor: 'Class'
            },
            {
              Header: 'Make',
              accessor: 'Make'
            },
            {
              Header: 'Model',
              accessor: 'Model'
            },
            {
              Header: 'Variant',
              accessor: 'Variant'
            },
            {
              Header: 'Year',
              accessor: 'Year'
            },
            {
              Header: 'Transmission',
              accessor: 'Transmission'
            },
            {
              Header: 'Fuel',
              accessor: 'Fuel'
            },
            {
              Header: 'KM Allowance',
              accessor: 'km_allowance'
            },
            {
              Header: 'Insurance',
              accessor: 'insurance'
            },
            {
              Header: '3 Month Price',
              accessor: 'Price_3'
            },
            {
              Header: '6 Month Price',
              accessor: 'Price_6'
            },
            {
              Header: '12 Month Price',
              accessor: 'Price_12'
            },
            {
              Header: '18 Month Price',
              accessor: 'Price_18'
            },
            {
              Header: '24 Month Price',
              accessor: 'Price_24'
            },
            {
              Header: 'Deposit',
              accessor: 'Deposit'
            },
        ],
        []
    )

    const onPaginationChange = (page) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageIndex = page
        dispatch(setTableData(newTableData))
    }

    const onSelectChange = (value) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageSize = Number(value)
        newTableData.pageIndex = 1
        dispatch(setTableData(newTableData))
    }

    const onSort = (sort, sortingColumn) => {
        const newTableData = cloneDeep(tableData)
        newTableData.sort = sort
        dispatch(setTableData(newTableData))
    }

    const onRowSelect = (checked, row) => {
        if (checked) {
            dispatch(addRowItem([row.id]))
        } else {
            dispatch(removeRowItem(row.id))
        }
    }

    const onAllRowSelect = useCallback(
        (checked, rows) => {
            if (checked) {
                const originalRows = rows.map((row) => row.original)
                const selectedIds = []
                originalRows.forEach((row) => {
                    selectedIds.push(row.id)
                })
                dispatch(setSelectedRows(selectedIds))
            } else {
                dispatch(setSelectedRows([]))
            }
        },
        [dispatch]
    )

    return (
        <DataTable
            columns={columns}
            data={data}
            loading={loading}
            pagingData={tableData}
            onPaginationChange={onPaginationChange}
            onSelectChange={onSelectChange}
            onSort={onSort}
            onCheckBoxChange={onRowSelect}
            onIndeterminateCheckBoxChange={onAllRowSelect}
            selectable
        />
    )
}

export default OrdersTable
