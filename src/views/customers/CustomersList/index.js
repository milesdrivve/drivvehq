import React from 'react'
import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import ListTable from './components/ListTable'
import TableTools from './components/TableTools'
//import OrdersTableTools from './components/OrdersTableTools'
//import ListDeleteConfirmation from './components/ListDeleteConfirmation'

import appConfig from 'configs/app.config'
import mockServer from 'mock'

const environment = process.env.NODE_ENV

if (appConfig.enableMock) {
    mockServer({ environment })
}

injectReducer('customerList', reducer)

const CustomersList = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Customers</h3>
                <TableTools />
            </div>
            <ListTable />
            {/*<ListDeleteConfirmation />*/}
        </AdaptableCard>
    )
}

export default CustomersList
