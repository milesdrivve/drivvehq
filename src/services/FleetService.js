import ApiService from './ApiService'
import { API, graphqlOperation } from 'aws-amplify'
import { getCars, listCars } from 'graphql/queries'
import { createCars, updateCars, deleteCars } from 'graphql/mutations'

/*export async function apiGetFleetDashboardData(data) {
    return ApiService.fetchData({
        url: '/fleet/dashboard',
        method: 'post',
        data,
    })
}

export async function apiGetFleetProducts(data) {
    return ApiService.fetchData({
        url: '/fleet/products',
        method: 'post',
        data,
    })
}

export async function apiGetFleetProduct(params) {
    return ApiService.fetchData({
        url: '/fleet/product',
        method: 'get',
        params,
    })
}*/

export async function apiGetCarsList(params) {
    return ApiService.fetchData({
        url: '/fleet/list',
        method: 'get',
        params,
    })
}

export async function apiListCars(data) {
  let filter = {
    or: [
        {
          make: { contains: data.query }
        },
        {
          model: { contains: data.query }
        },
        {
          transmission: { contains: data.query }
        }
      ]
  };
  return await API.graphql(
      graphqlOperation(listCars, {
        filter: filter
      })
  )
}
