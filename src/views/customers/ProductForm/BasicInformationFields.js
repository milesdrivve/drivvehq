import React from 'react'
import { AdaptableCard } from 'components/shared'
import { Input, FormItem } from 'components/ui'
import { Field } from 'formik'

const BasicInformationFields = (props) => {
    const { values, touched, errors } = props
    return (
        <AdaptableCard className="mb-4" divider isLastChild>
            <h5>Contact Information</h5><span className="gap-4">{values.getCustomers.id}</span>
            <p>&nbsp;</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-1">
                    <FormItem
                        label="First Name"
                        invalid={errors.first_name && touched.first_name}
                        errorMessage={errors.first_name}
                    >
                        <Field
                            type="text"
                            name="FirstName"
                            id="FirstName"
                            placeholder="First Name"
                            component={Input}
                            disabled={false}
                            value={values.getCustomers.first_name}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="Last Name"
                        invalid={errors.last_name && touched.last_name}
                        errorMessage={errors.last_name}
                    >
                        <Field
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            component={Input}
                            value={values.getCustomers.last_name}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="Email"
                        invalid={errors.email && touched.email}
                        errorMessage={errors.email}
                    >
                        <Field
                            type="text"
                            name="email"
                            placeholder="Email"
                            component={Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="Phone"
                        invalid={errors.phone && touched.phone}
                        errorMessage={errors.phone}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="phone"
                            placeholder="Cell / Phone"
                            component={Input}
                            value={values.getCustomers.phone}
                        />
                    </FormItem>
                </div>
            </div>
        </AdaptableCard>
    )
}

export default BasicInformationFields
