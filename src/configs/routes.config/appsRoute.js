import React from 'react'
import { APP_PREFIX_PATH } from 'constants/route.constant'
import { ADMIN, USER } from 'constants/roles.constant'

const appsRoute = [
    {
        key: 'appsReservations.reservationsList',
        path: `${APP_PREFIX_PATH}/reservations/reservations-list`,
        component: React.lazy(() => import('views/reservations/ReservationsList')),
        authority: [ADMIN, USER],
    },
    {
      key: 'appsReservations.reservationsEdit',
      path: `${APP_PREFIX_PATH}/reservations/reservations-edit/:reservationId`,
      component: React.lazy(() => import('views/reservations/ReservationsEdit')),
      authority: [ADMIN, USER],
      meta: {
          header: 'Edit Reservation',
      },
    },
    {
      key: 'appsReservations.reservationsNew',
      path: `${APP_PREFIX_PATH}/reservations/reservations-new`,
      component: React.lazy(() => import('views/reservations/ReservationsNew')),
      authority: [ADMIN, USER],
      meta: {
          header: 'New Reservation',
          headerStatus: "New",
      },
    },
    {
        key: 'appsCustomers.dashboard',
        path: `${APP_PREFIX_PATH}/customers/dashboard`,
        component: React.lazy(() => import('views/customers/CustomersDashboard')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCustomers.customersList',
        path: `${APP_PREFIX_PATH}/customers/customer-list`,
        component: React.lazy(() => import('views/customers/CustomersList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCustomers.customerDetails',
        path: `${APP_PREFIX_PATH}/customers/customer-details`,
        component: React.lazy(() => import('views/customers/CustomerDetail')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Customer Details',
            headerContainer: true,
        },
    },
    {
      key: 'appsCustomers.customerEdit',
      path: `${APP_PREFIX_PATH}/customers/customer-edit/:customerId`,
      component: React.lazy(() => import('views/customers/CustomerEdit')),
      authority: [ADMIN, USER],
      meta: {
          header: 'Edit Customer',
      },
  },
  {
      key: 'appsCustomers.customerNew',
      path: `${APP_PREFIX_PATH}/customers/customer-new`,
      component: React.lazy(() => import('views/customers/CustomerNew')),
      authority: [ADMIN, USER],
      meta: {
          header: 'Add New Customer',
      },
    },
    /*{
      key: 'appsCustomers.toDo',
      path: `${APP_PREFIX_PATH}/customers/todo`,
      component: React.lazy(() => import('views/customers/ToDo')),
      authority: [ADMIN, USER],
      meta: {
          header: 'ToDo',
      },
    },*/
    {
      key: 'appsCustomers.updateStatus',
      path: `${APP_PREFIX_PATH}/customers/update-status`,
      component: React.lazy(() => import('views/customers/UpdateStatus')),
      authority: [ADMIN, USER],
      meta: {
          header: 'Update Status',
      },
    },
    {
      key: 'appsCustomers.sendEmail',
      path: `${APP_PREFIX_PATH}/customers/send-email`,
      component: React.lazy(() => import('views/customers/SendEmail')),
      authority: [ADMIN, USER],
      meta: {
          header: 'Send Email',
      },
    },
    {
        key: 'appsFleet.fleetList',
        path: `${APP_PREFIX_PATH}/fleet/fleet-list`,
        component: React.lazy(() => import('views/fleet/FleetList')),
        authority: [ADMIN, USER],
        meta: {
          header: 'Vehicles',
      },
    },
    {
        key: 'appsFleet.fleetEdit',
        path: `${APP_PREFIX_PATH}/fleet/fleet-edit/:fleetId`,
        component: React.lazy(() => import('views/fleet/FleetEdit')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Edit Vehicle',
        },
    },
    {
        key: 'appsFleet.fleetNew',
        path: `${APP_PREFIX_PATH}/fleet/fleet-new`,
        component: React.lazy(() => import('views/fleet/FleetNew')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Add New Vehicle',
        },
    },
    {
        key: 'appsProject.dashboard',
        path: `${APP_PREFIX_PATH}/project/dashboard`,
        component: React.lazy(() => import('views/project/ProjectDashboard')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsProject.projectList',
        path: `${APP_PREFIX_PATH}/project/project-list`,
        component: React.lazy(() => import('views/project/ProjectList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsProject.scrumBoard',
        path: `${APP_PREFIX_PATH}/project/scrum-board`,
        component: React.lazy(() => import('views/project/ScrumBoard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
        },
    },
    {
        key: 'appsProject.issue',
        path: `${APP_PREFIX_PATH}/project/issue`,
        component: React.lazy(() => import('views/project/Issue')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCrm.dashboard',
        path: `${APP_PREFIX_PATH}/crm/dashboard`,
        component: React.lazy(() => import('views/crm/CrmDashboard')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCrm.calendar',
        path: `${APP_PREFIX_PATH}/crm/calendar`,
        component: React.lazy(() => import('views/crm/Calendar')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCrm.customers',
        path: `${APP_PREFIX_PATH}/crm/customers`,
        component: React.lazy(() => import('views/crm/Customers')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Customers',
        },
    },
    {
        key: 'appsCrm.customerDetails',
        path: `${APP_PREFIX_PATH}/crm/customer-details`,
        component: React.lazy(() => import('views/crm/CustomerDetail')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Customer Details',
            headerContainer: true,
        },
    },
    {
        key: 'appsCrm.mail',
        path: `${APP_PREFIX_PATH}/crm/mail`,
        component: React.lazy(() => import('views/crm/Mail')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
    {
        key: 'appsCrm.mail',
        path: `${APP_PREFIX_PATH}/crm/mail/:category`,
        component: React.lazy(() => import('views/crm/Mail')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
    {
        key: 'appsSales.dashboard',
        path: `${APP_PREFIX_PATH}/sales/dashboard`,
        component: React.lazy(() => import('views/sales/SalesDashboard')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsSales.productList',
        path: `${APP_PREFIX_PATH}/sales/product-list`,
        component: React.lazy(() => import('views/sales/ProductList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsSales.productEdit',
        path: `${APP_PREFIX_PATH}/sales/product-edit/:productId`,
        component: React.lazy(() => import('views/sales/ProductEdit')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Edit Product',
        },
    },
    {
        key: 'appsSales.productNew',
        path: `${APP_PREFIX_PATH}/sales/product-new`,
        component: React.lazy(() => import('views/sales/ProductNew')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Add New Product',
        },
    },
    {
        key: 'appsSales.orderList',
        path: `${APP_PREFIX_PATH}/sales/order-list`,
        component: React.lazy(() => import('views/sales/OrderList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsSales.orderDetails',
        path: `${APP_PREFIX_PATH}/sales/order-details/:orderId`,
        component: React.lazy(() => import('views/sales/OrderDetails')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCrypto.dashboard',
        path: `${APP_PREFIX_PATH}/crypto/dashboard`,
        component: React.lazy(() => import('views/crypto/CryptoDashboard')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCrypto.portfolio',
        path: `${APP_PREFIX_PATH}/crypto/portfolio`,
        component: React.lazy(() => import('views/crypto/Portfolio')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Portfolio',
        },
    },
    {
        key: 'appsCrypto.market',
        path: `${APP_PREFIX_PATH}/crypto/market`,
        component: React.lazy(() => import('views/crypto/Market')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Market',
        },
    },
    {
        key: 'appsCrypto.wallets',
        path: `${APP_PREFIX_PATH}/crypto/wallets`,
        component: React.lazy(() => import('views/crypto/Wallets')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Wallets',
        },
    },
    {
        key: 'appsknowledgeBase.helpCenter',
        path: `${APP_PREFIX_PATH}/knowledge-base/help-center`,
        component: React.lazy(() => import('views/knowledge-base/HelpCenter')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
        },
    },
    {
        key: 'appsknowledgeBase.article',
        path: `${APP_PREFIX_PATH}/knowledge-base/article`,
        component: React.lazy(() => import('views/knowledge-base/Article')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsknowledgeBase.manageArticles',
        path: `${APP_PREFIX_PATH}/knowledge-base/manage-articles`,
        component: React.lazy(() =>
            import('views/knowledge-base/ManageArticles')
        ),
        authority: [ADMIN, USER],
        meta: {
            header: 'Manage Articles',
            extraHeader: React.lazy(() =>
                import(
                    'views/knowledge-base/ManageArticles/components/PanelHeader'
                )
            ),
            headerContainer: true,
        },
    },
    {
        key: 'appsknowledgeBase.editArticle',
        path: `${APP_PREFIX_PATH}/knowledge-base/edit-article`,
        component: React.lazy(() => import('views/knowledge-base/EditArticle')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsAccount.settings',
        path: `${APP_PREFIX_PATH}/account/settings/:tab`,
        component: React.lazy(() => import('views/account/Settings')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Settings',
            headerContainer: true,
        },
    },
    {
        key: 'appsAccount.invoice',
        path: `${APP_PREFIX_PATH}/account/invoice/:id`,
        component: React.lazy(() => import('views/account/Invoice')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsAccount.activityLog',
        path: `${APP_PREFIX_PATH}/account/activity-log`,
        component: React.lazy(() => import('views/account/ActivityLog')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsAccount.kycForm',
        path: `${APP_PREFIX_PATH}/account/kyc-form`,
        component: React.lazy(() => import('views/account/KycForm')),
        authority: [ADMIN, USER],
    },
]

export default appsRoute
