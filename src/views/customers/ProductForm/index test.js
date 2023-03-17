import React, { forwardRef, useState } from 'react'
import { FormContainer, Button, hooks, Tabs } from 'components/ui'
import { StickyFooter, ConfirmDialog } from 'components/shared'
import { Form, Formik, Field } from 'formik'
import { Input, FormItem } from 'components/ui'
import BasicInformationFields from './BasicInformationFields'
import IdFields from './IdFields'
import AddressFields from './AddressFields'
import StatusFields from './StatusFields'
import ProductImages from './ProductImages'
import Summary from './Summary'
import cloneDeep from 'lodash/cloneDeep'
import { HiOutlineTrash } from 'react-icons/hi'
import { AiOutlineSave } from 'react-icons/ai'
import * as Yup from 'yup'

const { TabNav, TabList, TabContent } = Tabs

/*async function addCustomer() {
  try {
    if (!formState.name || !formState.description) return
    const todo = { ...formState }
    setTodos([...todos, todo])
    setFormState(initialState)
    await apiAddToDo({input: todo})
    openNotification("Success", "Todo added", "success")
  } catch (err) {
    console.log('error creating todo:', err)
    openNotification("Error", err, "danger")
  }
}*/

const ProductForm = forwardRef((props, ref) => {
    const { type, initialData, onFormSubmit, onDiscard, onDelete } = props

    return (
        <>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
            }}
            onSubmit={async (values) => {
              //await new Promise((r) => setTimeout(r, 500));
              //alert(JSON.stringify(values, null, 2));
              console.log(values);
              //addCustomer
            }}
          >
            {({ values, touched, errors, isSubmitting }) => (
            <Form>
              <FormContainer>
                <Tabs defaultValue="tab1">
                  <TabList>
                    <TabNav value="tab1">Contact</TabNav>
                    <TabNav value="tab2">Reservations</TabNav>
                    <TabNav value="tab3">Files</TabNav>
                  </TabList>
                  <div className="p-4">
                    <TabContent value="tab1">
                      <div className="grid grid-cols-12 lg:grid-cols-12 gap-4">
                        <div className="lg:col-span-9">
                          {/*<StatusFields
                                              touched={touched}
                                              errors={errors}
                                              values={values}
                                        />*/}
                          <BasicInformationFields
                                            touched={touched}
                                            errors={errors}
                                            values={values}
                                        />
                          {/*<label htmlFor="firstName">First Name</label>
                          <Field id="firstName" name="firstName" placeholder="Jane" />

                          <label htmlFor="lastName">Last Name</label>
                          <Field id="lastName" name="lastName" placeholder="Doe" />

                          <label htmlFor="email">Email</label>
                          <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                                      />*/}
                          {/*<IdFields
                                            touched={touched}
                                            errors={errors}
                                            values={values}
                                        />
                                        <AddressFields
                                            touched={touched}
                                            errors={errors}
                                            values={values}
                                        />*/}
                        </div>
                        <div className="lg:col-span-3">
                          {/*<Summary
                          />*/}
                        </div>
                      </div>
                    </TabContent>
                    <TabContent value="tab2">
                      <p>
                        Reservations
                      </p>
                    </TabContent>
                    <TabContent value="tab3">
                      <ProductImages
                      />
                    </TabContent>
                  </div>
                </Tabs>
                <StickyFooter
                  className="-mx-8 px-8 flex items-center justify-between py-4"
                  stickyClass="border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                >
                  <div>
                    {type === 'edit' && (
                      {/*<DeleteProductButton
                        onDelete={onDelete}
                    />*/}
                    )}
                  </div>
                  <div className="md:flex items-center">
                    <Button
                      size="sm"
                      className="ltr:mr-3 rtl:ml-3"
                      onClick={() => onDiscard?.()}
                      type="button"
                    >
                      Discard
                    </Button>
                    <Button
                      size="sm"
                      //loading={isSubmitting}
                      icon={<AiOutlineSave />}
                      type="submit"
                    >
                      Save
                    </Button>
                    <button type="submit">Submit</button>
                  </div>
                </StickyFooter>
              </FormContainer>
            </Form>
            )}
          </Formik>
        </>
    )
})

export default ProductForm
