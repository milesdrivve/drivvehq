import React, { useEffect, useCallback, useMemo } from 'react'
import { Badge, Tooltip } from 'components/ui'
import { DataTable } from 'components/shared'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
//import NumberFormat from 'react-number-format'
import { useDispatch, useSelector } from 'react-redux'
import { getTableData, setTableData } from '../store/dataSlice'
import {
    setSelectedRows,
    addRowItem,
    removeRowItem,
    setDeleteMode,
    setSelectedRow,
} from '../store/stateSlice'
import useThemeClass from 'utils/hooks/useThemeClass'
import { useNavigate } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import dayjs from 'dayjs'

/*const orderStatusColor = {
    0: {
        label: 'New',
        dotClass: 'bg-emerald-500',
        textClass: 'text-emerald-500',
    },
    1: {
        label: 'Pending',
        dotClass: 'bg-amber-500',
        textClass: 'text-amber-500',
    },
    2: {
        label: 'Declined',
        dotClass: 'bg-red-500',
        textClass: 'text-red-500'
    },
}*/

/*const OrderColumn = ({ row }) => {
    const { textTheme } = useThemeClass()
    const navigate = useNavigate()

    const onView = useCallback(() => {
        navigate(`/app/reservations/reservation-details?id=8`)
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

const ActionColumn = ({ row }) => {
    const dispatch = useDispatch()
    const { textTheme } = useThemeClass()
    const navigate = useNavigate()

    const onEdit = () => {
      navigate(`/app/reservations/reservations-edit/${row.id}`)
    }

    const onDelete = () => {
        dispatch(setDeleteMode('single'))
        console.log('onDelete')
        console.log([row.id])
        dispatch(setSelectedRow([row.id]))
    }

    /*const onView = useCallback(() => {
        navigate(`/app/reservations/reservation-details?${row.id}`)
    }, [navigate, row])*/

    return (
      <div className="flex justify-end text-lg">
          <Tooltip title="edit">
            <span
                className={`cursor-pointer p-2 hover:${textTheme}`}
                onClick={onEdit}
            >
                <HiOutlinePencil />
            </span>
          </Tooltip>
          <Tooltip title="Delete">
              <span
                  className="cursor-pointer p-2 hover:text-red-500"
                  onClick={onDelete}
              >
                  <HiOutlineTrash />
              </span>
          </Tooltip>
      </div>
    )
}

const ListTable = () => {
    const dispatch = useDispatch()
    const { pageIndex, pageSize, sort, query, total } = useSelector(
        (state) => state.reservationList.data.tableData
    )

    const loading = useSelector((state) => state.reservationList.data.loading)
    const data = useSelector((state) => state.reservationList.data.orderList)

    const fetchData = useCallback(() => {
        dispatch(getTableData({ pageIndex, pageSize, sort, query }))
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
              Header: 'Id',
              accessor: 'id',
              sortable: false,
            },
            {
              Header: 'Reservation Number',
              accessor: 'reservation_id',
              sortable: false,
            },
            {
              Header: 'Status',
              accessor: 'status',
              sortable: false,
            },
            {
              Header: 'Customer',
              accessor: 'customer_id',
              sortable: false,
            },
            {
              Header: 'Pickup Date',
              accessor: 'pickup_date',
              sortable: false,
            },
            {
              Header: 'Return Date',
              accessor: 'return_date',
              sortable: false,
            },
            {
              Header: 'Pickup Location',
              accessor: 'pickup_location',
              sortable: false,
            },
            {
              Header: 'Car',
              accessor: 'car',
              sortable: false,
            },
            {
              Header: 'Price',
              accessor: 'price',
              sortable: false,
            },
            {
              Header: 'Deposit',
              accessor: 'deposit',
              sortable: false,
            },
            {
              Header: 'Created',
              accessor: 'createdAt',
              sortable: false,
            },
            {
              Header: '',
              id: 'action',
              accessor: (row) => row,
              Cell: (props) => <ActionColumn row={props.row.original} />,
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

export default ListTable
