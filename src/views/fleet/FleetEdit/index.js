import React, { useEffect, useState } from 'react'
import { DataStore } from 'aws-amplify'
import { Cars } from '../../../models'
import { AdaptableCard } from 'components/shared'
import CarsUpdateForm from 'ui-components/CarsUpdateForm'
import { toast, Notification } from 'components/ui'
import { useLocation, useNavigate } from 'react-router-dom'

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

const FleetEdit = () => {
  const [car, setCar] = useState([])
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const param = location.pathname.substring(
      location.pathname.lastIndexOf('/') + 1
    )

    const sub = DataStore.observeQuery(Cars, (c) =>
      c.id.eq(param)
    ).subscribe(({ items }) => {
      setCar(items[0]);
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return (
      <>
        <AdaptableCard className="mb-4" divider isLastChild>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1">
              <ThemeProvider theme={updatedTheme}>
              <CarsUpdateForm
                cars={car}
                onSuccess={(fields) => {
                openNotification("Success", "Car updated", "success")
              }} />
              </ThemeProvider>
              </div>
            </div>
        </AdaptableCard>
      </>
  )
}

export default FleetEdit
