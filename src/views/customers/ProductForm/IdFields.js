import React from 'react'
import { AdaptableCard } from 'components/shared'
import { Input, FormItem, Upload } from 'components/ui'
import { Field } from 'formik'

const IdFields = (props) => {
    const { touched, errors } = props

    return (
        <AdaptableCard className="mb-4" divider isLastChild>
            <h5>Identity Information</h5>
            <p>&nbsp;</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-1">
                    <FormItem
                        label="SA Id / Passport"
                        invalid={errors.said && touched.said}
                        errorMessage={errors.said}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="ID Number"
                            placeholder="SA Id / Passport"
                            component={Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="_"
                        invalid={errors.sa_upload && touched.sa_upload}
                        errorMessage={errors.sa_upload}
                    >
                      <div>
                        <Upload />
                      </div>
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="Drivers Licence"
                        invalid={errors.drivers && touched.drivers}
                        errorMessage={errors.drivers}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="Drivers License Number"
                            placeholder="Drivers Licence"
                            component={Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                  <FormItem
                        label="_"
                        invalid={errors.drivers_upload && touched.drivers_upload}
                        errorMessage={errors.drivers_upload}
                    >
                      <div>
                        <Upload />
                      </div>
                    </FormItem>
                </div>
            </div>
        </AdaptableCard>
    )
}

export default IdFields
