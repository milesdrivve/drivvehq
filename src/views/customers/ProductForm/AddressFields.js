import React from 'react'
import { AdaptableCard } from 'components/shared'
import { Input, FormItem, Select } from 'components/ui'
import { Field } from 'formik'
import { provinceList } from 'constants/provinces.constant'

const AddressFields = (props) => {
    const { values, touched, errors } = props

    return (
        <AdaptableCard className="mb-4" divider isLastChild>
            <h5>Address Information</h5>
            <p>&nbsp;</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-1">
                    <FormItem
                        label="Street 1"
                        invalid={errors.street1 && touched.street1}
                        errorMessage={errors.street1}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="Street"
                            placeholder="First Name"
                            component={Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="Street 2"
                        invalid={errors.street2 && touched.street2}
                        errorMessage={errors.street2}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="Street 2"
                            placeholder="Street 2"
                            component={Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="City"
                        invalid={errors.city && touched.city}
                        errorMessage={errors.city}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="City"
                            placeholder="City"
                            component={Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="Province"
                        invalid={errors.province && touched.province}
                        errorMessage={errors.province}
                    >
                        <Field name="Province">
                            {({ field, form }) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={provinceList}
                                    value={provinceList.filter(
                                        (province) =>
                                        province.label === values.Province
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-1">
                    <FormItem
                        label="Postal Code"
                        invalid={errors.postal && touched.postal}
                        errorMessage={errors.postal}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="Postal Code"
                            placeholder="Postal Code"
                            component={Input}
                        />
                    </FormItem>
                </div>
            </div>
        </AdaptableCard>
    )
}

export default AddressFields
