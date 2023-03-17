import React from 'react'
import { AdaptableCard } from 'components/shared'
import { Input, FormItem } from 'components/ui'
import { Field } from 'formik'

const BasicInformationFields = (props) => {
    const { values, touched, errors } = props

    return (
        <AdaptableCard className="mb-4" divider isLastChild>
            <h5>Contact Information</h5>
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
                            autoComplete="off"
                            name="first_name"
                            placeholder="First Name"
                            component={Input}
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
                            autoComplete="off"
                            name="last_name"
                            placeholder="Last Name"
                            component={Input}
                        />
                    </FormItem>
                </div>
                {/*<div className="col-span-1">
                    <FormItem
                        label="Email"
                        invalid={errors.email && touched.email}
                        errorMessage={errors.email}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="Email Address"
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
                            name="Phone_Number"
                            placeholder="Cell / Phone"
                            component={Input}
                        />
                    </FormItem>
    </div>*/}
            </div>
        </AdaptableCard>
    )
}

export default BasicInformationFields
