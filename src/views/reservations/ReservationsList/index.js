import React from 'react'
import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import ListTable from './components/ListTable'
import TableTools from './components/TableTools'
//import OrdersTableTools from './components/OrdersTableTools'
import ListDeleteConfirmation from './components/ListDeleteConfirmation'

injectReducer('reservationList', reducer)

const ReservationsList = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                {/*<h3 className="mb-4 lg:mb-0">Reservations</h3>*/}
                {<TableTools />}
                {/*<OrdersTableTools />*/}
            </div>
            <ListTable />
            <ListDeleteConfirmation />
        </AdaptableCard>
    )
}

export default ReservationsList
