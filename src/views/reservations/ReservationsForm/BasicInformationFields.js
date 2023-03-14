import React from 'react'
import { AdaptableCard } from 'components/shared'
import { Input, FormItem, DatePicker, Select } from 'components/ui'
import { Field } from 'formik'
import { PaceLocationList } from 'constants/suppliers.constant'

const { DateTimepicker } = DatePicker

const BasicInformationFields = (props) => {
    const { values, touched, errors } = props

    return (
        <AdaptableCard className="mb-4" divider isLastChild>
          <h5>Date/Time Information</h5>
          <p>&nbsp;</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                  <FormItem
                      label="Pickup Date & Time"
                      invalid={errors.pickupDate && touched.pickupDate}
                      errorMessage={errors.pickupDate}
                  >
                    <DateTimepicker
                        name="pickupDate"
                        component={Input}
                        placeholder="Pickup date & time"
                        />
                  </FormItem>
              </div>
              <div className="col-span-1">
              <FormItem
                      label="Return Date & Time"
                      invalid={errors.returnDate && touched.returnDate}
                      errorMessage={errors.returnDate}
                  >
                      <DateTimepicker
                        name="returnDate"
                        component={Input}
                        placeholder="Return date & time"
                        />
                  </FormItem>
              </div>
          </div>
          <h5 className="mt-5">Pickup Information</h5>
          <p>&nbsp;</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                  <FormItem
                      label="Pickup Location"
                      invalid={errors.pickupLocation && touched.pickupLocation}
                      errorMessage={errors.pickupLocation}
                  >
                    <Field name="Province">
                            {({ field, form }) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={PaceLocationList}
                                    value={PaceLocationList.filter(
                                        (location) =>
                                        location.label === values.Province
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
          <h5 className="mt-5">Comments</h5>
          <p>&nbsp;</p>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <FormItem
                label="Comments"
                labelClass="!justify-start"
                invalid={errors.description && touched.comments}
                errorMessage={errors.comments}
            >
                <Field
                    textArea
                    type="text"
                    autoComplete="off"
                    name="comments"
                    placeholder="Comments"
                    component={Input}
                />
            </FormItem>
          </div>
      </AdaptableCard>
    )
}

export default BasicInformationFields
