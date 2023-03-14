import React from 'react'
import { AdaptableCard } from 'components/shared'
import { Input, FormItem, Alert, Timeline } from 'components/ui'
import { Field } from 'formik'

export const statuses = [
    { label: 'one', value: 'one' },
    { label: 'two', value: 'two' },
]

const StatusFields = (props) => {
    const { touched, errors } = props

    return (
        <AdaptableCard className="mb-4" divider isLastChild>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4)">
              <div className="col-span-2">
                <h5>Activity log</h5>
                <p>&nbsp;</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4)">
              <div className="col-span-2">
                  <FormItem
                      invalid={errors.status && touched.status}
                      errorMessage={errors.status}
                  >
                    <div>
                        <Timeline>
                            <Timeline.Item><b>Update by Miles</b> - 23 Feb 2023 @ 09:00</Timeline.Item>
                            <Timeline.Item><b>Update by Miles</b> - 23 Feb 2023 @ 09:00</Timeline.Item>
                            <Timeline.Item><b>Created</b> - 23 Feb 2023 @ 09:00</Timeline.Item>
                        </Timeline>
                    </div>
                  </FormItem>
              </div>
            </div>
        </AdaptableCard>
    )
}

export default StatusFields
