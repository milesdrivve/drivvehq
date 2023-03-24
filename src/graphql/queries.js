/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReservations = /* GraphQL */ `
  query GetReservations($id: ID!) {
    getReservations(id: $id) {
      id
      pickup_date
      return_date
      pickup_location
      status
      car
      price
      deposit
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listReservations = /* GraphQL */ `
  query ListReservations(
    $filter: ModelReservationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pickup_date
        return_date
        pickup_location
        status
        car
        price
        deposit
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncReservations = /* GraphQL */ `
  query SyncReservations(
    $filter: ModelReservationsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReservations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        pickup_date
        return_date
        pickup_location
        status
        car
        price
        deposit
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const reservationsByCustomersID = /* GraphQL */ `
  query ReservationsByCustomersID(
    $customersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReservationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reservationsByCustomersID(
      customersID: $customersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pickup_date
        return_date
        pickup_location
        status
        car
        price
        deposit
        customersID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCustomers = /* GraphQL */ `
  query GetCustomers($id: ID!) {
    getCustomers(id: $id) {
      id
      first_name
      last_name
      email
      phone
      id_number
      drivers_licence
      salary
      status
      CustomersReservations {
        items {
          id
          pickup_date
          return_date
          pickup_location
          status
          car
          price
          deposit
          customersID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        email
        phone
        id_number
        drivers_licence
        salary
        status
        CustomersReservations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCustomers = /* GraphQL */ `
  query SyncCustomers(
    $filter: ModelCustomersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        first_name
        last_name
        email
        phone
        id_number
        drivers_licence
        salary
        status
        CustomersReservations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
