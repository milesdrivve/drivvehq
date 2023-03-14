import React from 'react'
import { AdaptableCard } from 'components/shared'
import { Input, FormItem, Select } from 'components/ui'
import { Field } from 'formik'
import { DeliveryList, InsuranceList } from 'constants/reservation.contstant'
import { SupplierList } from 'constants/suppliers.constant'

export const carClasses = [
  { label: 'one', value: 'one' },
  { label: 'two', value: 'two' },
]

const CarFields = (props) => {
    const { values, touched, errors } = props

    return (
        <AdaptableCard className="mb-4" divider isLastChild>
            <h5>Car details</h5>
            <p>&nbsp;</p>
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
                <div className="col-span-2">
                    <FormItem
                        label="Supplier"
                        invalid={errors.supplier && touched.supplier}
                        errorMessage={errors.supplier}
                    >
                        <Field name="supplier">
                            {({ field, form }) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={SupplierList}
                                    value={SupplierList.filter(
                                        (supplier) =>
                                        supplier.label === values.supplier
                                    )}
                                    onChange={(option) =>
                                        form.setFieldValue(
                                            field.name,
                                            option.label
                                        )
                                    }
                                />
                            )}
                        </Field>
                    </FormItem>
                </div>
              </div>
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
                <div className="col-span-2">
                    <FormItem
                        label="Class"
                        invalid={errors.carClass && touched.carClass}
                        errorMessage={errors.carClass}
                    >
                        <Field name="carClass">
                            {({ field, form }) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={carClasses}
                                    value={carClasses.filter(
                                        (carClass) =>
                                        carClass.value === values.carClass
                                    )}
                                    onChange={(option) =>
                                        form.setFieldValue(
                                            field.name,
                                            option.value
                                        )
                                    }
                                />
                            )}
                        </Field>
                    </FormItem>
                </div>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
                <div className="col-span-2">
                    <FormItem
                        label="Delivery"
                        invalid={errors.carDelivery && touched.carDelivery}
                        errorMessage={errors.carDelivery}
                    >
                        <Field name="carDelivery">
                            {({ field, form }) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={DeliveryList}
                                    value={DeliveryList.filter(
                                        (carDelivery) =>
                                        carDelivery.label === values.carDelivery
                                    )}
                                    onChange={(option) =>
                                        form.setFieldValue(
                                            field.name,
                                            option.label
                                        )
                                    }
                                    defaultValue={0}
                                />
                            )}
                        </Field>
                    </FormItem>
                </div>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
                <div className="col-span-2">
                    <FormItem
                        label="Insurance"
                        invalid={errors.carInsurance && touched.carInsurance}
                        errorMessage={errors.carInsurance}
                    >
                        <Field name="carInsurance">
                            {({ field, form }) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={InsuranceList}
                                    value={InsuranceList.filter(
                                        (carInsurance) =>
                                        carInsurance.label === values.carInsurance
                                    )}
                                    onChange={(option) =>
                                        form.setFieldValue(
                                            field.name,
                                            option.label
                                        )
                                    }
                                />
                            )}
                        </Field>
                    </FormItem>
                </div>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
                <div className="col-span-2">
                    <FormItem
                        label="Additional drivers"
                        invalid={errors.additionalDrivers && touched.additionalDrivers}
                        errorMessage={errors.additionalDrivers}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="additionalDrivers"
                            placeholder="Additional drivers"
                            component={Input}
                        />
                    </FormItem>
                </div>
            </div>
        </AdaptableCard>
    )
}

export default CarFields
