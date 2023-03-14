import React, { useEffect } from 'react'
import { Loading, DoubleSidedImage } from 'components/shared'
import { toast, Notification } from 'components/ui'
import { useDispatch, useSelector } from 'react-redux'
import reducer from './store'
import { injectReducer } from 'store/index'
import { useLocation, useNavigate } from 'react-router-dom'
//import { getProduct, updateProduct, deleteProduct } from './store/dataSlice'
import { getProduct } from './store/dataSlice'
import ReservationsForm from 'views/reservations/ReservationsForm'
import isEmpty from 'lodash/isEmpty'

injectReducer('reservationEdit', reducer)

const ReservationsEdit = () => {
    const dispatch = useDispatch()

    const location = useLocation()
    const navigate = useNavigate()

    const productData = useSelector(
        (state) => state.reservationEdit.data.productData
    )
    const loading = useSelector((state) => state.reservationEdit.data.loading)

    const fetchData = (data) => {
        dispatch(getProduct(data))
    }

    const handleFormSubmit = async (values, setSubmitting) => {
        /*setSubmitting(true)
        const success = await updateProduct(values)
        setSubmitting(false)
        if (success) {
            popNotification('updated')
        }*/
    }

    const handleDiscard = () => {
        navigate('/app/reservations/reservations-list')
    }

    const handleDelete = async (setDialogOpen) => {
        /*setDialogOpen(false)
        const success = await deleteProduct({ id: productData.id })
        if (success) {
            popNotification('deleted')
        }*/
    }

    const popNotification = (keyword) => {
        toast.push(
            <Notification
                title={`Successfuly ${keyword}`}
                type="success"
                duration={2500}
            >
                Reservation successfuly {keyword}
            </Notification>,
            {
                placement: 'top-center',
            }
        )
        navigate('/app/reservations/reservations-list')
    }

    useEffect(() => {
        const path = location.pathname.substring(
            location.pathname.lastIndexOf('/') + 1
        )
        const rquestParam = { id: path }
        fetchData(rquestParam)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])

    return (
        <>
            <Loading loading={loading}>
                {!isEmpty(productData) && (
                    <>
                        <ReservationsForm
                            type="edit"
                            initialData={productData}
                            onFormSubmit={handleFormSubmit}
                            onDiscard={handleDiscard}
                            onDelete={handleDelete}
                        />
                    </>
                )}
            </Loading>
            {!loading && isEmpty(productData) && (
                <div className="h-full flex flex-col items-center justify-center">
                    <DoubleSidedImage
                        src="/img/others/img-2.png"
                        darkModeSrc="/img/others/img-2-dark.png"
                        alt="No product found!"
                    />
                    <h3 className="mt-8">No reservation found!</h3>
                </div>
            )}
        </>
    )
}

export default ReservationsEdit
