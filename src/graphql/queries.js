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
export const listReservations = /* GraphQL */ `
  query ListReservations(
    $filter: ModelReservationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        CustomersReservations {
          items {
            id
            customer_id
            start_date
            end_date
            make
            model
            class
            variant
            status
            reservation_id
            price
            pickup_location
            deposit
            duration
            createdAt
            updatedAt
          }
        }
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
