import React, { useEffect } from 'react'
import { Loading, DoubleSidedImage } from 'components/shared'
import { toast, Notification } from 'components/ui'
import { useDispatch, useSelector } from 'react-redux'
import reducer from './store'
import { injectReducer } from 'store/index'
import { useLocation, useNavigate } from 'react-router-dom'
//import { getProduct, updateProduct, deleteProduct } from './store/dataSlice'
import { getProduct } from './store/dataSlice'
import ProductForm from 'views/customers/ProductForm'
import isEmpty from 'lodash/isEmpty'
import { apiUpdateCustomer, apiGetCustomer } from 'services/CustomerService'

injectReducer('customerEdit', reducer)

const openNotification = (title, message, type) => {
  toast.push(
      <Notification
          title={title}
          type={type}
          duration={2500}
      >
          {message}
      </Notification>
  )
}

const CustomerEdit = () => {
    const dispatch = useDispatch()

    const location = useLocation()
    const navigate = useNavigate()

    const productData = useSelector(
        (state) => state.customerEdit.data.productData
    )
    const loading = useSelector((state) => state.customerEdit.data.loading)

    //const fetchData = (data) => {
        //dispatch(getProduct(data))
    //    dispatch(getCustomer({input:data}))
    //}

    const fetchData = async (data) => {
      console.log('fetchData')
      console.log(data)
      dispatch(getProduct(data))
      const response = await apiGetCustomer(data)
      console.log(response)
      return response.data
    }

    const updateCustomer = async (data) => {
      console.log('updateCustomer to code')
      //const response = await apiUpdateCustomer({id:id, input:data})
      //return response.data
    }

    const handleFormSubmit = async (values, setSubmitting) => {
        setSubmitting(true)
        const success = await updateCustomer(values)
        setSubmitting(false)
        if (success) {
            popNotification('updated')
        }
    }

    const handleDiscard = () => {
        navigate('/app/customers/customer-list')
    }

    /*const handleDelete = async (setDialogOpen) => {
        setDialogOpen(false)
        const success = await deleteProduct({ id: productData.id })
        if (success) {
            popNotification('deleted')
        }
    }*/

    const popNotification = (keyword) => {
        toast.push(
            <Notification
                title={`Successfuly ${keyword}`}
                type="success"
                duration={2500}
            >
                Customer successfuly {keyword}
            </Notification>,
            {
                placement: 'top-center',
            }
        )
        navigate('/app/customers/customer-list')
    }

    useEffect(() => {
        const param = location.pathname.substring(
            location.pathname.lastIndexOf('/') + 1
        )
        //const rquestParam = { id: param }
        //console.log('rquestParam...')
        //console.log(rquestParam)
        //fetchData(rquestParam)
        fetchData(param)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])

    return (
        <>
            <Loading loading={loading}>
                {!isEmpty(productData) && (
                    <>
                        <ProductForm
                            type="edit"
                            initialData={productData}
                            onFormSubmit={handleFormSubmit}
                            onDiscard={handleDiscard}
                            //onDelete={handleDelete}
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
                    <h3 className="mt-8">No customer found!</h3>
                </div>
            )}
        </>
    )
}

export default CustomerEdit
