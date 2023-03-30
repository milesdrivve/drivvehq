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
        navigate(`/app/customers/customer-edit?id=8`)
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
      navigate(`/app/customers/customer-edit/${row.id}`)
    }

    const onDelete = () => {
        dispatch(setDeleteMode('single'))
        dispatch(setSelectedRow([row.id]))
    }

    /*const onView = useCallback(() => {
        //navigate(`/app/sales/order-details/${row.id}`)
        navigate(`/app/customers/customer-details?id=8`)
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
        (state) => state.customerList.data.tableData
    )

    const loading = useSelector((state) => state.customerList.data.loading)
    const data = useSelector((state) => state.customerList.data.orderList)

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
              Header: 'Status',
              accessor: 'status',
              sortable: false,
            },
            {
              Header: 'Reservations',
              accessor: 'CustomerReservations.items[0].id',
              sortable: false,
            },
            {
              Header: 'Full Name',
              accessor: 'first_name',
              sortable: true,
            },
            {
              Header: 'Last Name',
              accessor: 'last_name',
              sortable: true,
            },
            {
              Header: 'Cell / Phone',
              accessor: 'phone',
              sortable: false,
            },
            {
              Header: 'Email',
              accessor: 'email',
              sortable: false,
            },
            {
              Header: 'Id / Passport',
              accessor: 'id_number',
              sortable: false,
            },
            {
              Header: 'Drivers',
              accessor: 'drivers_licence',
              sortable: false,
            },
            {
              Header: 'Nett Salary',
              accessor: 'salary_nett',
              sortable: false,
            },
            {
              Header: 'Address',
              accessor: 'address_1',
              sortable: false,
            },
            {
              Header: 'Address',
              accessor: 'address_2',
              sortable: false,
            },
            {
              Header: 'City',
              accessor: 'city',
              sortable: false,
            },
            {
              Header: 'Province',
              accessor: 'province',
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
