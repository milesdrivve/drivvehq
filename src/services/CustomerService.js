import ApiService from './ApiService'
import { API, graphqlOperation } from 'aws-amplify'
import { getCustomers, listCustomers } from 'graphql/queries'
import { createCustomers, updateCustomers, deleteCustomers } from 'graphql/mutations'

export async function apiGetCustomerList(params) {
    return ApiService.fetchData({
        url: '/customers/list',
        method: 'get',
        params,
    })
}

/*export async function apiPutCustomer(data) {
  return ApiService.fetchData({
      url: '/customers/customers',
      method: 'put',
      data,
  })
}*/

export async function apiGetCustomerDetails(params) {
  return ApiService.fetchData({
      url: '/customers/customer-details',
      method: 'get',
      params,
  })
}

/*export async function apiCreateCustomer(data) {
  return ApiService.fetchData({
      url: '/customers/create',
      method: 'post',
      data,
  })
}*/

export async function apiCreateCustomer(data) {
  return await API.graphql(graphqlOperation(createCustomers, data))
}