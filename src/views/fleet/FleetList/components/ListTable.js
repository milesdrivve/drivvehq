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

const ActionColumn = ({ row }) => {
    const dispatch = useDispatch()
    const { textTheme } = useThemeClass()
    const navigate = useNavigate()

    const onEdit = () => {
      navigate(`/app/fleet/fleet-edit/${row.id}`)
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
        (state) => state.carList.data.tableData
    )

    const loading = useSelector((state) => state.carList.data.loading)
    const data = useSelector((state) => state.carList.data.orderList)

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
              Header: 'Make',
              accessor: 'make',
              sortable: false,
            },
            {
              Header: 'Model',
              accessor: 'model',
              sortable: false,
            },
            {
              Header: 'Variant',
              accessor: 'variant',
              sortable: true,
            },
            {
              Header: 'Class',
              accessor: 'class',
              sortable: true,
            },
            {
              Header: 'Year',
              accessor: 'year',
              sortable: true,
            },
            {
              Header: 'Fule',
              accessor: 'fuel',
              sortable: false,
            },
            {
              Header: 'Transmission',
              accessor: 'transmission',
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
