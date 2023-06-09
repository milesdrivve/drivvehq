import { APP_PREFIX_PATH } from 'constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from 'constants/navigation.constant'
import { ADMIN, USER } from 'constants/roles.constant'

const hqNavigationConfig = [
    {
        key: 'apps',
        path: '',
        title: 'HQ',
        translateKey: 'nav.apps',
        icon: 'apps',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        subMenu: [
            {
                key: 'apps.customers',
                path: '',
                title: 'Customers',
                translateKey: 'nav.appsCustomer.customers',
                icon: 'crm',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    {
                        key: 'appsCustomers.dashboard',
                        path: `${APP_PREFIX_PATH}/customers/dashboard`,
                        title: 'Dashboard',
                        translateKey: 'nav.appsCustomers.dashboard',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                      key: 'appsCustomers.customerList',
                      path: `${APP_PREFIX_PATH}/customers/customer-list`,
                      title: 'Customers',
                      translateKey: 'nav.appsCustomers.customerList',
                      icon: '',
                      type: NAV_ITEM_TYPE_ITEM,
                      authority: [ADMIN, USER],
                      subMenu: [],
                    },
                  /*{
                      key: 'appsCustomers.customerDetails',
                      path: `${APP_PREFIX_PATH}/customers/customer-details?id=8`,
                      title: 'Customer Details',
                      translateKey: 'nav.appsCustomers.customerDetails',
                      icon: '',
                      type: NAV_ITEM_TYPE_ITEM,
                      authority: [ADMIN, USER],
                      subMenu: [],
                  },*/
                  {
                    key: 'appsCustomers.customerNew',
                    path: `${APP_PREFIX_PATH}/customers/customer-new`,
                    title: 'Add Customer',
                    translateKey: 'nav.appsCustomers.customerNew',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                  },
                  {
                    key: 'appsCustomers.updateStatus',
                    path: `${APP_PREFIX_PATH}/customers/update-status`,
                    title: 'Update Status',
                    translateKey: 'nav.appsCustomers.updateStatus',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                  },
                  {
                    key: 'appsCustomers.sendEmail',
                    path: `${APP_PREFIX_PATH}/customers/send-email`,
                    title: 'Send email',
                    translateKey: 'nav.appsCustomers.sendEmail',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                  },
                  /*{
                      key: 'appsCustomers.productEdit',
                      path: `${APP_PREFIX_PATH}/customers/product-edit/12`,
                      title: 'Edit Customer',
                      translateKey: 'nav.appsCustomers.productEdit',
                      icon: '',
                      type: NAV_ITEM_TYPE_ITEM,
                      authority: [ADMIN, USER],
                      subMenu: [],
                  },*/
                ],
            },
            {
              key: 'apps.reservations',
              path: '',
              title: 'Reservations',
              translateKey: 'nav.appsReservations.reservations',
              icon: 'project',
              type: NAV_ITEM_TYPE_COLLAPSE,
              authority: [ADMIN, USER],
              subMenu: [
                  {
                      key: 'appsReservations.dashboard',
                      path: `${APP_PREFIX_PATH}/reservations/dashboard`,
                      title: 'Dashboard',
                      translateKey: 'nav.appsReservations.dashboard',
                      icon: '',
                      type: NAV_ITEM_TYPE_ITEM,
                      authority: [ADMIN, USER],
                      subMenu: [],
                  },
                  {
                    key: 'appsReservations.reservationList',
                    path: `${APP_PREFIX_PATH}/reservations/reservations-list`,
                    title: 'Reservations',
                    translateKey: 'nav.appsReservations.reservationsList',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },
                {
                  key: 'appsReservations.reservationNew',
                  path: `${APP_PREFIX_PATH}/reservations/reservations-new`,
                  title: 'Add Reservation',
                  translateKey: 'nav.appsReservations.reservationsNew',
                  icon: '',
                  type: NAV_ITEM_TYPE_ITEM,
                  authority: [ADMIN, USER],
                  subMenu: [],
                }
                /*{
                  key: 'appsReservations.reservationsNew',
                  path: `${APP_PREFIX_PATH}/reservations/reservations-new`,
                  title: 'Add Reservation',
                  translateKey: 'nav.appsReservations.reservationsNew',
                  icon: '',
                  type: NAV_ITEM_TYPE_ITEM,
                  authority: [ADMIN, USER],
                  subMenu: [],
                },
                {
                    key: 'appsReservations.reservationsEdit',
                    path: `${APP_PREFIX_PATH}/reservations/reservations-edit/12`,
                    title: 'Edit Reservation',
                    translateKey: 'nav.appsReservations.reservationsEdit',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },*/
              ],
          },
          {
            key: 'apps.Fleet',
            path: '',
            title: 'Fleet',
            translateKey: 'nav.appsFleet.fleet',
            icon: 'navigation',
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [ADMIN, USER],
            subMenu: [
                {
                    key: 'appsFleet.dashboard',
                    path: `${APP_PREFIX_PATH}/fleet/dashboard`,
                    title: 'Dashboard',
                    translateKey: 'nav.appsFleet.dashboard',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },
                {
                  key: 'appsFleet.fleetList',
                  path: `${APP_PREFIX_PATH}/fleet/fleet-list`,
                  title: 'Cars',
                  translateKey: 'nav.appsFleet.fleetList',
                  icon: '',
                  type: NAV_ITEM_TYPE_ITEM,
                  authority: [ADMIN, USER],
                  subMenu: [],
                },
                {
                  key: 'appsFleet.fleetNew',
                  path: `${APP_PREFIX_PATH}/fleet/fleet-new`,
                  title: 'Add Car',
                  translateKey: 'nav.appsFleet.fleetNew',
                  icon: '',
                  type: NAV_ITEM_TYPE_ITEM,
                  authority: [ADMIN, USER],
                  subMenu: [],
                },
            ],
          },
        ],
    },
]

export default hqNavigationConfig
