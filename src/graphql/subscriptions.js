/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReservations = /* GraphQL */ `
  subscription OnCreateReservations(
    $filter: ModelSubscriptionReservationsFilterInput
  ) {
    onCreateReservations(filter: $filter) {
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
  }
`;
export const onUpdateReservations = /* GraphQL */ `
  subscription OnUpdateReservations(
    $filter: ModelSubscriptionReservationsFilterInput
  ) {
    onUpdateReservations(filter: $filter) {
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
  }
`;
export const onDeleteReservations = /* GraphQL */ `
  subscription OnDeleteReservations(
    $filter: ModelSubscriptionReservationsFilterInput
  ) {
    onDeleteReservations(filter: $filter) {
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
  }
`;
export const onCreateCustomers = /* GraphQL */ `
  subscription OnCreateCustomers(
    $filter: ModelSubscriptionCustomersFilterInput
  ) {
    onCreateCustomers(filter: $filter) {
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
export const onUpdateCustomers = /* GraphQL */ `
  subscription OnUpdateCustomers(
    $filter: ModelSubscriptionCustomersFilterInput
  ) {
    onUpdateCustomers(filter: $filter) {
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
export const onDeleteCustomers = /* GraphQL */ `
  subscription OnDeleteCustomers(
    $filter: ModelSubscriptionCustomersFilterInput
  ) {
    onDeleteCustomers(filter: $filter) {
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
