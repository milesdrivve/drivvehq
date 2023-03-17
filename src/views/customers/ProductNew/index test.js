import React from 'react'
import ProductForm from 'views/customers/ProductForm'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { apiCreateCustomer } from 'services/CustomerService';

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

const ProductNew = () => {
    const navigate = useNavigate()

    return (
        <>
            <ProductForm
                type="new"
            />
        </>
    )
}

export default ProductNew
