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
      reservation_id
      pickup_date
      return_date
      pickup_location
      make
      model
      variant
      price
      deposit
      status
      customer_id
      start_date
      duration
      end_date
      class
      test_1
      test_2
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
      reservation_id
      pickup_date
      return_date
      pickup_location
      make
      model
      variant
      price
      deposit
      status
      customer_id
      start_date
      duration
      end_date
      class
      test_1
      test_2
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
      reservation_id
      pickup_date
      return_date
      pickup_location
      make
      model
      variant
      price
      deposit
      status
      customer_id
      start_date
      duration
      end_date
      class
      test_1
      test_2
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
      id_expiry
      drivers_licence_expiry
      status
      date_reviewed
      address_1
      address_2
      city
      province
      postal_code
      salary_nett
      drivers_licence
      id_file
      drivers_licence_file
      poa_fi
      bank_statement_1_file
      bank_statement_2_file
      bank_statement_3_file
      salary_slip_1_file
      salary_slip_2_file
      salary_slip_3_file
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
      id_expiry
      drivers_licence_expiry
      status
      date_reviewed
      address_1
      address_2
      city
      province
      postal_code
      salary_nett
      drivers_licence
      id_file
      drivers_licence_file
      poa_fi
      bank_statement_1_file
      bank_statement_2_file
      bank_statement_3_file
      salary_slip_1_file
      salary_slip_2_file
      salary_slip_3_file
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
      id_expiry
      drivers_licence_expiry
      status
      date_reviewed
      address_1
      address_2
      city
      province
      postal_code
      salary_nett
      drivers_licence
      id_file
      drivers_licence_file
      poa_fi
      bank_statement_1_file
      bank_statement_2_file
      bank_statement_3_file
      salary_slip_1_file
      salary_slip_2_file
      salary_slip_3_file
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
  }
`;
