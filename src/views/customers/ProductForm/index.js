import React, { forwardRef, useState } from 'react'
import { FormContainer, Button, hooks, Tabs } from 'components/ui'
import { StickyFooter, ConfirmDialog } from 'components/shared'
import { Form, Formik } from 'formik'
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

const { useUniqueId } = hooks

const validationSchema = Yup.object().shape({
    //name: Yup.string().required('Name Required'),
    //price: Yup.number().required('Price Required'),
    //stock: Yup.number().required('SKU Required'),
    //category: Yup.string().required('Category Required'),
})

const DeleteProductButton = ({ onDelete }) => {
    const [dialogOpen, setDialogOpen] = useState(false)

    const onConfirmDialogOpen = () => {
        setDialogOpen(true)
    }

    const onConfirmDialogClose = () => {
        setDialogOpen(false)
    }

    const handleConfirm = () => {
        onDelete?.(setDialogOpen)
    }

    return (
        <>
            <Button
                className="text-red-600"
                variant="plain"
                size="sm"
                icon={<HiOutlineTrash />}
                type="button"
                onClick={onConfirmDialogOpen}
            >
                Delete
            </Button>
            <ConfirmDialog
                isOpen={dialogOpen}
                onClose={onConfirmDialogClose}
                onRequestClose={onConfirmDialogClose}
                type="danger"
                title="Delete product"
                onCancel={onConfirmDialogClose}
                onConfirm={handleConfirm}
                confirmButtonColor="red-600"
            >
                <p>
                    Dude, are you sure you want to delete this record? This action
                    cannot be undone.
                </p>
            </ConfirmDialog>
        </>
    )
}

const ProductForm = forwardRef((props, ref) => {
    const { type, initialData, onFormSubmit, onDiscard, onDelete } = props

    //const newId = useUniqueId('product-')

    return (
        <>
            <Formik
                innerRef={ref}
                initialValues={{
                    ...initialData,
                    /*tags: initialData?.tags
                        ? initialData.tags.map((value) => ({
                              label: value,
                              value,
                          }))
                        : [],*/
                }}
                //validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('here 1')
                    const formData = cloneDeep(values)
                    //formData.tags = formData.tags.map((tag) => tag.value)
                    /*if (type === 'new') {
                        formData.id = newId
                        if (formData.imgList.length > 0) {
                            formData.img = formData.imgList[0].img
                        }
                    }*/
                    console.log(formData)
                    console.log('here 2')
                    onFormSubmit?.(formData, setSubmitting)
                    console.log('here 3')
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
                                                  touched={touched}
                                                  errors={errors}
                                                  values={values}
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
                                              touched={touched}
                                              errors={errors}
                                              values={values}
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
                                        <DeleteProductButton
                                            onDelete={onDelete}
                                        />
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
                                        loading={isSubmitting}
                                        icon={<AiOutlineSave />}
                                        type="submit"
                                    >
                                        Save
                                    </Button>
                                </div>
                            </StickyFooter>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </>
    )
})

ProductForm.defaultProps = {
    type: 'edit',
    initialData: {
      first_name: '',
      last_name: '',
        /*id: '',
        name: '',
        img: '',
        imgList: [],
        tags: [],
        description: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        street1: '',
        street2: '',
        city: '',
        province: '',
        postal: '',
        drivers: '',
        said: '',*/
    },
}

export default ProductForm
