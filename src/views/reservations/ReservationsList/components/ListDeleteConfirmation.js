import React from 'react'
import { toast, Notification } from 'components/ui'
import { ConfirmDialog } from 'components/shared'
import { useSelector, useDispatch } from 'react-redux'
import {
    setDeleteMode,
    setSelectedRow,
    setSelectedRows,
} from '../store/stateSlice'
import { deleteData, getTableData } from '../store/dataSlice'
import { DataStore } from 'aws-amplify'
import { Reservations } from '../../../../models'

const ListDeleteConfirmation = () => {
    const dispatch = useDispatch()
    const selectedRows = useSelector(
        (state) => state.reservationList.state.selectedRows
    )
    const selectedRow = useSelector(
        (state) => state.reservationList.state.selectedRow
    )
    const deleteMode = useSelector(
        (state) => state.reservationList.state.deleteMode
    )
    const tableData = useSelector(
        (state) => state.reservationList.data.tableData
    )

    const onDialogClose = () => {
        dispatch(setDeleteMode(''))

        if (deleteMode === 'single') {
            dispatch(setSelectedRow([]))
        }
    }

    const onDelete = async () => {
        dispatch(setDeleteMode(''))

        console.log('fuck onDelete '+selectedRow)

        /*if (deleteMode === 'single') {
            const success = await deleteData({ selectedRow })
            console.log(success)
            deleteSucceed(success)
            dispatch(setSelectedRow([]))
        }

        if (deleteMode === 'batch') {
            const success = await deleteData({ selectedRows })
            deleteSucceed(success, selectedRows.length)
            dispatch(setSelectedRows([]))
        }*/

        const toDelete = DataStore.query(Reservations, '1ed06ea4-8a9e-4574-a565-df5af4b4546e');
        console.log(toDelete)
        DataStore.delete(toDelete);
    }

    const deleteSucceed = (success, orders) => {
        if (success) {
            dispatch(getTableData(tableData))
            toast.push(
                <Notification
                    title={'Successfuly Deleted'}
                    type="success"
                    duration={2500}
                >
                    {deleteMode === 'single' && 'Order '}
                    {deleteMode === 'batch' && `${orders} orders `}
                    successfuly deleted
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
        }
    }

    return (
        <ConfirmDialog
            isOpen={deleteMode === 'single' || deleteMode === 'batch'}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
            type="danger"
            title="Delete product"
            onCancel={onDialogClose}
            onConfirm={onDelete}
            confirmButtonColor="red-600"
        >
            <p>
                Dude, are you sure you want to delete this record? This action cannot be
                undone.
            </p>
        </ConfirmDialog>
    )
}

export default ListDeleteConfirmation
