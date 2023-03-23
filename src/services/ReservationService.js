import ApiService from './ApiService'
import { API, graphqlOperation } from 'aws-amplify'
import { getReservations, listReservations } from 'graphql/queries'
import { createReservations, updateReservations, deleteReservations } from 'graphql/mutations'

export async function apiGetReservationList(params) {
    return ApiService.fetchData({
        url: '/reservations/list',
        method: 'get',
        params,
    })
}

export async function apiGetReservationDetails(params) {
  return ApiService.fetchData({
      url: '/reservations/reservation-details',
      method: 'get',
      params,
  })
}

export async function apiListReservations(data) {
  let filter = {
    or: [
        {
          pickup_location: { contains: data.query }
        }
      ]
  };
  return await API.graphql(
      graphqlOperation(listReservations, {
        filter: filter
      })
  )
}