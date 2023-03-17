import React from 'react'
import ProductForm from 'views/customers/ProductForm'
//import ToDo from 'views/customers/ToDo'
//import ContactForm from 'views/customers/ContactForm'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { apiCreateCustomer } from 'services/CustomerService'

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

const CustomerNew = () => {
    const navigate = useNavigate()

    const addCustomer = async (data) => {
        const response = await apiCreateCustomer({input: data})
        return response.data
    }

    const handleFormSubmit = async (values, setSubmitting) => {
        console.log('submitting...')
        console.log(values)
        setSubmitting(true)
        const response = await addCustomer(values)
        console.log(response)
        //const response = true
        setSubmitting(false)
        if (response) {
          openNotification("Success", "Customer added", "success")
            //navigate('/app/customers/customer-list')
        } else {
          openNotification("Error", response, "danger")
        }
    }

    const handleDiscard = () => {
        //navigate('/app/customers/customer-list')
    }

    return (
        <>
            {/*<ContactForm />
            <ToDo />*/}
            <ProductForm
                type="new"
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
            />
        </>
    )
}

export default CustomerNew
