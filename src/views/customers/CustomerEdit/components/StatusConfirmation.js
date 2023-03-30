import React, { useEffect, useState } from 'react'
import { toast, Notification, Button, Dialog } from 'components/ui'
import { ConfirmDialog } from 'components/shared'
import { useSelector, useDispatch } from 'react-redux'

const StatusConfirmation = ({ trigger, fields, customer }) => {
    const [dialogIsOpen, setIsOpen] = useState(false)
    //const dispatch = useDispatch()

    const openDialog = () => {
        setIsOpen(true)
    }

    const onDialogClose = (e) => {
        console.log('onDialogClose', e)
        setIsOpen(false)
    }

    const onDialogOk = (e) => {
        console.log('onDialogOk', e)
        setIsOpen(false)
    }

    useEffect(() => {
      if (trigger) {
        console.log(fields)
        console.log(customer)

        openDialog();
      }
    }, [trigger]);

    /*const selectedRows = useSelector(
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
    )*/

    /*const onDialogClose = () => {
        //dispatch(setDeleteMode(''))

        //if (deleteMode === 'single') {
            //dispatch(setSelectedRow([]))
        //}
    }*/

    /*const onStatusUpdate = async () => {
        //dispatch(setDeleteMode(''))

        console.log('fuck ok here ')

        //const toDelete = DataStore.query(Reservations, '1ed06ea4-8a9e-4574-a565-df5af4b4546e');
        //console.log(toDelete)
        //DataStore.delete(toDelete);
    }*/

    /*const deleteSucceed = (success, orders) => {
        if (success) {
            //dispatch(getTableData(tableData))
            toast.push(
                <Notification
                    title={'Successfuly Sent'}
                    type="success"
                    duration={2500}
                >
                    successfuly snet
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
        }
    }*/

    return (
      <div>
      <Button onClick={() => openDialog()}>
          Open Dialog
      </Button>
      <Dialog
                isOpen={dialogIsOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
            >
                <h5 className="mb-4">Dialog Title</h5>
                <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                </p>
                <div className="text-right mt-6">
                    <Button
                        className="ltr:mr-2 rtl:ml-2"
                        onClick={onDialogClose}
                    >
                        Cancel
                    </Button>
                    <Button onClick={onDialogOk}>
                        Okay
                    </Button>
                </div>
            </Dialog>
        {/*<ConfirmDialog
            isOpen=""
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
            type="danger"
            title="Send Status Email"
            onCancel={onDialogClose}
            onConfirm={onStatusUpdate}
            confirmButtonColor="red-600"
        >
            <p>
                Message here to confirm is want to send email
            </p>
    </ConfirmDialog>*/}
        </div>
    )
}

export default StatusConfirmation
