import { API, graphqlOperation } from 'aws-amplify'
import { listToDos } from 'graphql/queries'
import { createToDo } from 'graphql/mutations'

export async function apiGetToDo() {
  return await API.graphql(graphqlOperation(listToDos))
  //return await API.graphql({query: listToDos })
}

export async function apiAddToDo(data) {
  return await API.graphql(graphqlOperation(createToDo, data))
}