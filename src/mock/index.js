import { createServer } from 'miragejs'
import appConfig from 'configs/app.config'
import { notificationListData, searchQueryPoolData } from './data/commonData'
import {
  reservationListData,
} from './data/reservationData'
import {
  customerListData,
} from './data/customerData'
import {
  fleetListData,
} from './data/fleetData'
import {
    projectList,
    scrumboardData,
    issueData,
    projectDashboardData,
} from './data/projectData'
import { usersData, userDetailData } from './data/usersData'
import { eventsData, mailData, crmDashboardData } from './data/crmData'
import {
    productsData,
    ordersData,
    orderDetailsData,
    salesDashboardData,
} from './data/salesData'
import {
    portfolioData,
    walletsData,
    marketData,
    transactionHistoryData,
    cryptoDashboardData,
} from './data/cryptoData'
import {
    settingData,
    settingIntergrationData,
    settingBillingData,
    invoiceData,
    logData,
    accountFormData,
} from './data/accountData'
import {
    helpCenterCategoriesData,
    helpCenterArticleListData,
} from './data/knowledgeBaseData'
import { signInUserData } from './data/authData'

import {
    reservationFakeApi,
    customerFakeApi,
    fleetFakeApi,
    commonFakeApi,
    projectFakeApi,
    crmFakeApi,
    salesFakeApi,
    accountFakeApi,
    cryptoFakeApi,
    authFakeApi,
    knowledgeBaseFakeApi,
} from './fakeApi'

const { apiPrefix } = appConfig

export default function mockServer({ environment = 'test' }) {
    return createServer({
        environment,
        seeds(server) {
            server.db.loadData({
                reservationListData,
                customerListData,
                fleetListData,
                notificationListData,
                searchQueryPoolData,
                projectList,
                scrumboardData,
                issueData,
                usersData,
                userDetailData,
                eventsData,
                mailData,
                productsData,
                ordersData,
                orderDetailsData,
                settingData,
                settingIntergrationData,
                settingBillingData,
                invoiceData,
                logData,
                accountFormData,
                portfolioData,
                walletsData,
                marketData,
                transactionHistoryData,
                helpCenterCategoriesData,
                helpCenterArticleListData,
                signInUserData,
                salesDashboardData,
                crmDashboardData,
                projectDashboardData,
                cryptoDashboardData,
            })
        },
        routes() {
            this.urlPrefix = ''
            this.namespace = ''
            this.passthrough((request) => {
                let isExternal = request.url.startsWith('http')
                return isExternal
            })
            this.passthrough()

            reservationFakeApi(this, apiPrefix)
            customerFakeApi(this, apiPrefix)
            fleetFakeApi(this, apiPrefix)
            commonFakeApi(this, apiPrefix)
            projectFakeApi(this, apiPrefix)
            crmFakeApi(this, apiPrefix)
            salesFakeApi(this, apiPrefix)
            accountFakeApi(this, apiPrefix)
            authFakeApi(this, apiPrefix)
            cryptoFakeApi(this, apiPrefix)
            knowledgeBaseFakeApi(this, apiPrefix)
        },
    })
}
