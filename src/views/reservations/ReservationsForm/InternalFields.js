import React from 'react'
import { AdaptableCard } from 'components/shared'
import { Input, FormItem, TextArea } from 'components/ui'
import { Field } from 'formik'

const InternalFields = (props) => {
    const { touched, errors } = props

    return (
        <AdaptableCard className="mb-4" divider isLastChild>
          <h5>Comments</h5>
          <p>&nbsp;</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                  <FormItem
                      label="Comments"
                      invalid={errors.comments && touched.comments}
                      errorMessage={errors.comments}
                  >
                    <Field
                            type="text"
                            textArea
                            autoComplete="off"
                            name="comments"
                            placeholder="Comments"
                            component={Input}
                        />
                  </FormItem>
              </div>
          </div>
      </AdaptableCard>
    )
}

export default InternalFields
