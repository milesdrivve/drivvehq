import React from 'react'
import { AdaptableCard } from 'components/shared'

const CustomerSummary = (props) => {
    const { values, touched, errors } = props

    return (
        <AdaptableCard className="mb-4" divider isLastChild>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div>
                        <div className="flex items-center">
                            <h6>{values.Customer}</h6>
                        </div>
                        <div>
                            <span>
                            {values.id}
                            </span>
                        </div>
                        <div>
                            <span>
                                mrandmrssmith.com
                            </span>
                        </div>
                        <div>
                            <span>
                                072 123 4567
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </AdaptableCard>
    )
}

export default CustomerSummary
