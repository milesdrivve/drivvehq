import ApiService from './ApiService'

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

export async function apiCreateCustomer(data) {
  return ApiService.fetchData({
      url: '/customers/create',
      method: 'post',
      data,
  })
}