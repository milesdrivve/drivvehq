import ApiService from './ApiService'

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