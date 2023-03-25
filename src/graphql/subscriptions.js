/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCars = /* GraphQL */ `
  subscription OnCreateCars($filter: ModelSubscriptionCarsFilterInput) {
    onCreateCars(filter: $filter) {
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
export const onUpdateCars = /* GraphQL */ `
  subscription OnUpdateCars($filter: ModelSubscriptionCarsFilterInput) {
    onUpdateCars(filter: $filter) {
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
export const onDeleteCars = /* GraphQL */ `
  subscription OnDeleteCars($filter: ModelSubscriptionCarsFilterInput) {
    onDeleteCars(filter: $filter) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
