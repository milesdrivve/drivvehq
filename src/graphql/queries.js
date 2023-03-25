/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCars = /* GraphQL */ `
  query GetCars($id: ID!) {
    getCars(id: $id) {
      id
      make
      model
      variant
      fuel
      transmission
      year
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
export const listCars = /* GraphQL */ `
  query ListCars(
    $filter: ModelCarsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        make
        model
        variant
        fuel
        transmission
        year
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
export const syncCars = /* GraphQL */ `
  query SyncCars(
    $filter: ModelCarsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCars(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        make
        model
        variant
        fuel
        transmission
        year
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
