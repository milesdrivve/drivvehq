import React from 'react'
import { AdaptableCard } from 'components/shared'
import { FormItem, Select, Tag } from 'components/ui'
import { Field } from 'formik'
import { statusList } from 'constants/status.constant'

const StatusFields = (props) => {
    const { values, touched, errors } = props

    return (
      <AdaptableCard className="mb-4" divider isLastChild>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1">
            <FormItem
                  label="Status"
                  invalid={errors.status && touched.status}
                  errorMessage={errors.status}
              >
                  <Field name="Status">
                      {({ field, form }) => (
                          <Select
                              field={field}
                              form={form}
                              options={statusList}
                              value={statusList.filter(
                                  (status) =>
                                  status.label === values.Status
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
    </AdaptableCard>
    )
}

export default StatusFields
