import React from 'react'
import reducer from './store'
import { injectReducer } from 'store/index'
import DashboardHeader from './components/DashboardHeader'
import DashboardBody from './components/DashboardBody'

injectReducer('salesDashboard', reducer)

const CustomersDashboard = () => {
    return (
        <div className="flex flex-col gap-4 h-full">
            <DashboardHeader />
            <DashboardBody />
        </div>
    )
}

export default CustomersDashboard
