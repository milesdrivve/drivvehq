/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReservations = /* GraphQL */ `
  mutation CreateReservations(
    $input: CreateReservationsInput!
    $condition: ModelReservationsConditionInput
  ) {
    createReservations(input: $input, condition: $condition) {
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
export const updateReservations = /* GraphQL */ `
  mutation UpdateReservations(
    $input: UpdateReservationsInput!
    $condition: ModelReservationsConditionInput
  ) {
    updateReservations(input: $input, condition: $condition) {
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
export const deleteReservations = /* GraphQL */ `
  mutation DeleteReservations(
    $input: DeleteReservationsInput!
    $condition: ModelReservationsConditionInput
  ) {
    deleteReservations(input: $input, condition: $condition) {
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
export const createCustomers = /* GraphQL */ `
  mutation CreateCustomers(
    $input: CreateCustomersInput!
    $condition: ModelCustomersConditionInput
  ) {
    createCustomers(input: $input, condition: $condition) {
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
export const updateCustomers = /* GraphQL */ `
  mutation UpdateCustomers(
    $input: UpdateCustomersInput!
    $condition: ModelCustomersConditionInput
  ) {
    updateCustomers(input: $input, condition: $condition) {
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
export const deleteCustomers = /* GraphQL */ `
  mutation DeleteCustomers(
    $input: DeleteCustomersInput!
    $condition: ModelCustomersConditionInput
  ) {
    deleteCustomers(input: $input, condition: $condition) {
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
