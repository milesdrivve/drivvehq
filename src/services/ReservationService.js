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
    /*or: [
        {
          pickup_location: { contains: data.query }
        }
      ]*/
  };
  let sort = {
    direction: 'asc',
    field: 'createdAt'
  }
  return await API.graphql(
    graphqlOperation(listReservations, {
      filter: filter,
      sort: sort
    })
  )
}

export async function apiDeleteReservations(data) {
  console.log('apiDeleteReservations')
  console.log(data)
  /*let filter = {
      id: { contains: data }
  };
  return await API.graphql(
    graphqlOperation(deleteReservations, {
      id: data
    })
  )*/

  const todoDetails = {
    id: '1ed06ea4-8a9e-4574-a565-df5af4b4546e',
  };

  const deletedTodo = await API.graphql({
    query: deleteReservations,
    variables: { input: todoDetails }
  });

}