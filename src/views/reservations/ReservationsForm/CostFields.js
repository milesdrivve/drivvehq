import React from 'react'
import { AdaptableCard } from 'components/shared'
import { Input, FormItem } from 'components/ui'
import { Field } from 'formik'

export const statuses = [
    { label: 'one', value: 'one' },
    { label: 'two', value: 'two' },
]

const CostFields = (props) => {
    const { touched, errors } = props

    return (
        <AdaptableCard className="mb-4" divider isLastChild>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4)">
              <div className="col-span-3">
                <h5>Costs & Fees</h5>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4)">
              <div className="col-span-2">
                <ul>
                  <li class="flex items-center justify-between">
                    <span>Subscription</span><span class="font-semibold"><span>R 7,150</span></span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span>Registration fee</span><span class="font-semibold"><span>R 2,500</span></span>
                  </li>
                  <li class="flex items-center justify-between mb-3">
                    <span>Delivery fee</span><span class="font-semibold"><span>R 500</span></span>
                  </li>
                  <hr className="mb-3" />
                  <li class="flex items-center justify-between">
                    <span>Total</span><span class="font-semibold"><span>$1,870.72</span></span>
                  </li>
                </ul>
              </div>
            </div>
        </AdaptableCard>
    )
}

export default CostFields
