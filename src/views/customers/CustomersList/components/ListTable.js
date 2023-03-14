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

const orderStatusColor = {
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
}

const OrderColumn = ({ row }) => {
    const { textTheme } = useThemeClass()
    const navigate = useNavigate()

    const onView = useCallback(() => {
        //navigate(`/app/sales/order-details/${row.id}`)
        navigate(`/app/customers/customer-details?id=8`)
    }, [navigate, row])

    return (
        <span
            className={`cursor-pointer select-none font-semibold hover:${textTheme}`}
            onClick={onView}
        >
            #{row.id}
        </span>
    )
}

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
              accessor: 'Status',
              sortable: false,
            },
            {
              Header: 'Reservations',
              accessor: 'Reservation Count',
              sortable: false,
            },
            {
              Header: 'Full Name',
              accessor: 'Full_Name',
              sortable: true,
            },
            {
              Header: 'Cell / Phone',
              accessor: 'Phone_Number',
              sortable: false,
            },
            {
              Header: 'Email',
              accessor: 'Email Address',
              sortable: false,
            },
            {
              Header: 'Id / Passport',
              accessor: 'ID Number',
              sortable: false,
            },
            {
              Header: 'Drivers',
              accessor: 'Drivers License Number',
              sortable: false,
            },
            {
              Header: 'Address',
              accessor: 'Street',
              sortable: false,
            },
            {
              Header: 'City',
              accessor: 'City',
              sortable: false,
            },
            {
              Header: 'Province',
              accessor: 'Province',
              sortable: false,
            },
            /*{
              Header: 'Reservations',
              accessor: 'id',
              sortable: true,
            },
            {
              Header: 'Files',
              sortable: false,
              Cell: () => {
                return (
                    <span>3</span>
                )
              },
            },
            {
              Header: 'City',
              sortable: false,
              Cell: () => {
                return (
                  <span>
                        City
                        </span>
                )
              },
            },
            {
              Header: 'Province',
              sortable: false,
              Cell: () => {
                return (
                  <span>
                        Province
                        </span>
                )
              },
            },
            {
                Header: 'Status',
                accessor: 'status',
                sortable: false,
                Cell: (props) => {
                    const { status } = props.row.original
                    return (
                        <div className="flex items-center">
                            <Badge
                                className={orderStatusColor[status].dotClass}
                            />
                            <span
                                className={`ml-2 rtl:mr-2 capitalize font-semibold ${orderStatusColor[status].textClass}`}
                            >
                                {orderStatusColor[status].label}
                            </span>
                        </div>
                    )
                },
            },
            {
              Header: 'Date added',
              accessor: 'date',
              sortable: true,
              Cell: (props) => {
                  const row = props.row.original
                  return (
                      <span>{dayjs.unix(row.date).format('DD/MM/YYYY')}</span>
                  )
              },
            },*/
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
