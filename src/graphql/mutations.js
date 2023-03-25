/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCars = /* GraphQL */ `
  mutation CreateCars(
    $input: CreateCarsInput!
    $condition: ModelCarsConditionInput
  ) {
    createCars(input: $input, condition: $condition) {
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
export const updateCars = /* GraphQL */ `
  mutation UpdateCars(
    $input: UpdateCarsInput!
    $condition: ModelCarsConditionInput
  ) {
    updateCars(input: $input, condition: $condition) {
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
export const deleteCars = /* GraphQL */ `
  mutation DeleteCars(
    $input: DeleteCarsInput!
    $condition: ModelCarsConditionInput
  ) {
    deleteCars(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
