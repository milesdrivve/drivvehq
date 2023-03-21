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

/*export async function apiListCustomers() {
  return await API.graphql(graphqlOperation(listCustomers))
}*/

export async function apiListCustomers(data) {
  let filter = {
    or: [
        {
          first_name: { contains: data.query }
        },
        {
          last_name: { contains: data.query }
        },
        {
          email: { contains: data.query }
        }
      ]
  };
  return await API.graphql(
      graphqlOperation(listCustomers, {
        filter: filter
      })
  )
}

export async function apiGetCustomer(id) {
  return await API.graphql(graphqlOperation(
    getCustomers,
      {id: id}
  ))

  //return await API.graphql(graphqlOperation(getCustomers, {data}))
}

export async function apiCreateCustomer(data) {
  return await API.graphql(graphqlOperation(createCustomers, data))
}

export async function apiUpdateCustomer(data) {
  return await API.graphql(graphqlOperation(updateCustomers, {data}))
}

