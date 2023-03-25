import React from 'react'
import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import ListTable from './components/ListTable'
//import OrdersTableTools from './components/OrdersTableTools'
//import OrderDeleteConfirmation from './components/OrderDeleteConfirmation'

injectReducer('carList', reducer)

const FleetList = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            {/*<div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Orders</h3>
                <OrdersTableTools />
            </div>*/}
            <ListTable />
            {/*<OrderDeleteConfirmation />*/}
        </AdaptableCard>
    )
}

export default FleetList
