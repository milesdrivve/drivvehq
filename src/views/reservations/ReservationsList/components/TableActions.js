import React, { useState, useRef, forwardRef } from 'react'
import { Drawer, Input, Button, FormItem, FormContainer } from 'components/ui'
import { HiMenu } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { Field, Form, Formik } from 'formik'

const ActionForm = forwardRef(({ onSubmitComplete }, ref) => {
  const dispatch = useDispatch()

  const filterData = useSelector(
      (state) => state.reservationList.data.filterData
  )
  /*const sortedColumn = useSelector(
      (state) => state.reservationList.state.sortedColumn
  )*/

  const handleSubmit = (values) => {
      /*onSubmitComplete?.()
      dispatch(setFilterData(values))
      dispatch(getTableData(initialTableData))
      sortedColumn?.clearSortBy?.()*/
  }

  return (
      <Formik
          innerRef={ref}
          enableReinitialize
          initialValues={filterData}
          onSubmit={(values) => {
              handleSubmit(values)
          }}
      >
          {({ values, touched, errors }) => (
              <Form>
                  <FormContainer>
                      <FormItem
                          invalid={errors.category && touched.category}
                          errorMessage={errors.category}
                      >
                          <h6 className="mb-4">Email templates</h6>
                          <Field name="category">
                              {({ field, form }) => (
                                  <>

                                  </>
                              )}
                          </Field>
                      </FormItem>
                  </FormContainer>
              </Form>
          )}
      </Formik>
  )
})

const TableActions = () => {
    const formikRef = useRef()

    const [isOpen, setIsOpen] = useState(false)

    const openDrawer = () => {
        setIsOpen(true)
    }

    const onDrawerClose = (e) => {
        console.log('onDrawerClose', e)
        setIsOpen(false)
    }

    const formSubmit = () => {
      formikRef.current?.submitForm()
    }

    return (
        <div>
            <Button
              size="sm"
              icon={<HiMenu />}
              onClick={() => openDrawer()}>
              Actions
            </Button>
            <Drawer
                title="Actions"
                isOpen={isOpen}
                onClose={onDrawerClose}
                onRequestClose={onDrawerClose}
            >
                <ActionForm ref={formikRef} onSubmitComplete={onDrawerClose} />
            </Drawer>
        </div>
    )
}

export default TableActions