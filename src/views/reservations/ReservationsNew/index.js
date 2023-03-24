import React, { useEffect, useState } from 'react'
import { Form, Formik, Field } from 'formik'
import { FormContainer, Button, hooks, Tabs, Input, FormItem } from 'components/ui'
import { AdaptableCard } from 'components/shared'
import ReservationsCreateForm from 'ui-components/ReservationsCreateForm'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
//import { apiCreateCustomer } from 'services/CustomerService'

import { ThemeProvider, createTheme } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { studioTheme } from 'ui-components'
import Theme from 'components/template/Theme'

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

//const theme = createTheme(Theme)
const updatedTheme = createTheme({
  // Extend the theme to update the button color
  name: "my-theme",
  tokens: {
      components: {
          button: {
              primary: {
                  backgroundColor: {
                      value: "#000"
                  },
              },
          },
      },
  },
}, studioTheme)

const ReservationsNew = () => {
    useEffect(() => {
      openNotification("Success", "hello there !", "success")
    })

    return (
        <>
          <AdaptableCard className="mb-4" divider isLastChild>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="col-span-1">
                <ThemeProvider theme={updatedTheme}>
                <ReservationsCreateForm
                  onSuccess={(fields) => {
                    console.log('success')
                    openNotification("Success", "Reservation added", "success")
                  }}
                  onError={(error) => {
                    console.log(error)
                  }}
                />
                </ThemeProvider>
                </div>
              </div>
          </AdaptableCard>
        </>
    )
}

export default ReservationsNew
