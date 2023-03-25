import React, { useRef } from 'react'
import { Button } from 'components/ui'
import { getTableData, setTableData, setFilterData } from '../store/dataSlice'
import TableSearch from './TableSearch'
//import TableActions from './TableActions'
import { useDispatch, useSelector } from 'react-redux'
import cloneDeep from 'lodash/cloneDeep'
import { useNavigate } from 'react-router-dom'
import { HiOutlinePlus } from 'react-icons/hi'

const TableTools = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const inputRef = useRef()

    const tableData = useSelector((state) => state.carList.data.tableData)

    const handleInputChange = (val) => {
        const newTableData = cloneDeep(tableData)
        newTableData.query = val
        newTableData.pageIndex = 1
        if (typeof val === 'string' && val.length > 1) {
            fetchData(newTableData)
        }

        if (typeof val === 'string' && val.length === 0) {
            fetchData(newTableData)
        }
    }

    const fetchData = (data) => {
        dispatch(setTableData(data))
        dispatch(getTableData(data))
    }

    const onClearAll = () => {
        const newTableData = cloneDeep(tableData)
        newTableData.query = ''
        inputRef.current.value = ''
        dispatch(setFilterData({ status: '' }))
        fetchData(newTableData)
    }

    const addNew = () => {
      navigate(`/app/fleet/fleet-new/`)
    }

    return (
      <div className="md:flex items-center justify-between gap-4">
          <div className="md:flex items-center gap-4">
              <TableSearch
                  ref={inputRef}
                  onInputChange={handleInputChange}
              />
              {/*<TableFilter />*/}
          </div>
          <div className="mb-4">
              <Button size="sm" onClick={onClearAll}>
                Clear All
              </Button>
          </div>
          <div className="mb-4">
              <Button size="sm" onClick={addNew} icon={<HiOutlinePlus />}>
                  Add New
              </Button>
          </div>
      </div>
  )
}

export default TableTools
