import React from 'react'
import ProductForm from 'views/customers/ProductForm'
import ToDo from 'views/customers/ToDo'
import ContactForm from 'views/customers/ContactForm'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { apiCreateCustomer } from 'services/CustomerService'

const CustomerNew = () => {
    const navigate = useNavigate()

    const addCustomer = async (data) => {
        const response = await apiCreateCustomer(data)
        return response.data
    }

    const handleFormSubmit = async (values, setSubmitting) => {
        console.log('submitting...')
        setSubmitting(true)
        //const success = await addCustomer(values)
        //const success = true
        setSubmitting(false)
        //if (success) {
            toast.push(
                <Notification
                    title={'Successfuly added'}
                    type="success"
                    duration={2500}
                >
                    Customer successfuly added
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
            //navigate('/app/customers/customer-list')
        //}
    }

    const handleDiscard = () => {
        //navigate('/app/customers/customer-list')
    }

    return (
        <>
            <ContactForm />
            <ToDo />
            {/*<ProductForm
                type="new"
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
    />*/}
        </>
    )
}

export default CustomerNew
