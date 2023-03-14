import React from 'react'
import { AdaptableCard } from 'components/shared'
import { Avatar, Tag } from 'components/ui'
import { HiFire } from 'react-icons/hi'

const CarSummary = (props) => {
    const { touched, errors } = props

    return (
        <AdaptableCard className="mb-4" divider isLastChild>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div>
                        <div className="flex items-center">
                            <h6>VW Polo</h6>
                            <Tag className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 rounded-md border-0 mx-2">
                                <span className="capitalize">
                                    Pace
                                </span>
                            </Tag>
                        </div>
                        <div>
                            <span>
                                1.4 Trendline
                            </span>
                        </div>
                        <div>
                            <span>
                                2020
                            </span>
                        </div>
                        <div>
                            <span>
                                Automatic transmission
                            </span>
                        </div>
                        <div>
                            <span>
                                Petrol
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </AdaptableCard>
    )
}

export default CarSummary
