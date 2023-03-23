/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCandidate = /* GraphQL */ `
  subscription OnCreateCandidate(
    $filter: ModelSubscriptionCandidateFilterInput
  ) {
    onCreateCandidate(filter: $filter) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCandidate = /* GraphQL */ `
  subscription OnUpdateCandidate(
    $filter: ModelSubscriptionCandidateFilterInput
  ) {
    onUpdateCandidate(filter: $filter) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCandidate = /* GraphQL */ `
  subscription OnDeleteCandidate(
    $filter: ModelSubscriptionCandidateFilterInput
  ) {
    onDeleteCandidate(filter: $filter) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReservations = /* GraphQL */ `
  subscription OnCreateReservations(
    $filter: ModelSubscriptionReservationsFilterInput
  ) {
    onCreateReservations(filter: $filter) {
      id
      customersID
      pickup_date
      return_date
      pickup_location
      status
      car
      price
      deposit
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateReservations = /* GraphQL */ `
  subscription OnUpdateReservations(
    $filter: ModelSubscriptionReservationsFilterInput
  ) {
    onUpdateReservations(filter: $filter) {
      id
      customersID
      pickup_date
      return_date
      pickup_location
      status
      car
      price
      deposit
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteReservations = /* GraphQL */ `
  subscription OnDeleteReservations(
    $filter: ModelSubscriptionReservationsFilterInput
  ) {
    onDeleteReservations(filter: $filter) {
      id
      customersID
      pickup_date
      return_date
      pickup_location
      status
      car
      price
      deposit
      createdAt
      updatedAt
    }
  }
`;
export const onCreateToDo = /* GraphQL */ `
  subscription OnCreateToDo($filter: ModelSubscriptionToDoFilterInput) {
    onCreateToDo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateToDo = /* GraphQL */ `
  subscription OnUpdateToDo($filter: ModelSubscriptionToDoFilterInput) {
    onUpdateToDo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteToDo = /* GraphQL */ `
  subscription OnDeleteToDo($filter: ModelSubscriptionToDoFilterInput) {
    onDeleteToDo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFees = /* GraphQL */ `
  subscription OnCreateFees($filter: ModelSubscriptionFeesFilterInput) {
    onCreateFees(filter: $filter) {
      id
      deposit
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFees = /* GraphQL */ `
  subscription OnUpdateFees($filter: ModelSubscriptionFeesFilterInput) {
    onUpdateFees(filter: $filter) {
      id
      deposit
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFees = /* GraphQL */ `
  subscription OnDeleteFees($filter: ModelSubscriptionFeesFilterInput) {
    onDeleteFees(filter: $filter) {
      id
      deposit
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePrices = /* GraphQL */ `
  subscription OnCreatePrices($filter: ModelSubscriptionPricesFilterInput) {
    onCreatePrices(filter: $filter) {
      id
      rate_1
      rate_3
      rate_6
      rate_12
      rate_18
      rate_24
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePrices = /* GraphQL */ `
  subscription OnUpdatePrices($filter: ModelSubscriptionPricesFilterInput) {
    onUpdatePrices(filter: $filter) {
      id
      rate_1
      rate_3
      rate_6
      rate_12
      rate_18
      rate_24
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePrices = /* GraphQL */ `
  subscription OnDeletePrices($filter: ModelSubscriptionPricesFilterInput) {
    onDeletePrices(filter: $filter) {
      id
      rate_1
      rate_3
      rate_6
      rate_12
      rate_18
      rate_24
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateInsurancePackages = /* GraphQL */ `
  subscription OnCreateInsurancePackages(
    $filter: ModelSubscriptionInsurancePackagesFilterInput
  ) {
    onCreateInsurancePackages(filter: $filter) {
      id
      description
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInsurancePackages = /* GraphQL */ `
  subscription OnUpdateInsurancePackages(
    $filter: ModelSubscriptionInsurancePackagesFilterInput
  ) {
    onUpdateInsurancePackages(filter: $filter) {
      id
      description
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInsurancePackages = /* GraphQL */ `
  subscription OnDeleteInsurancePackages(
    $filter: ModelSubscriptionInsurancePackagesFilterInput
  ) {
    onDeleteInsurancePackages(filter: $filter) {
      id
      description
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateKMPackages = /* GraphQL */ `
  subscription OnCreateKMPackages(
    $filter: ModelSubscriptionKMPackagesFilterInput
  ) {
    onCreateKMPackages(filter: $filter) {
      id
      description
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateKMPackages = /* GraphQL */ `
  subscription OnUpdateKMPackages(
    $filter: ModelSubscriptionKMPackagesFilterInput
  ) {
    onUpdateKMPackages(filter: $filter) {
      id
      description
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteKMPackages = /* GraphQL */ `
  subscription OnDeleteKMPackages(
    $filter: ModelSubscriptionKMPackagesFilterInput
  ) {
    onDeleteKMPackages(filter: $filter) {
      id
      description
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateClasses = /* GraphQL */ `
  subscription OnCreateClasses($filter: ModelSubscriptionClassesFilterInput) {
    onCreateClasses(filter: $filter) {
      id
      description
      suppliersID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateClasses = /* GraphQL */ `
  subscription OnUpdateClasses($filter: ModelSubscriptionClassesFilterInput) {
    onUpdateClasses(filter: $filter) {
      id
      description
      suppliersID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteClasses = /* GraphQL */ `
  subscription OnDeleteClasses($filter: ModelSubscriptionClassesFilterInput) {
    onDeleteClasses(filter: $filter) {
      id
      description
      suppliersID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSuppliers = /* GraphQL */ `
  subscription OnCreateSuppliers(
    $filter: ModelSubscriptionSuppliersFilterInput
  ) {
    onCreateSuppliers(filter: $filter) {
      id
      description
      SuppliersClasses {
        items {
          id
          description
          suppliersID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSuppliers = /* GraphQL */ `
  subscription OnUpdateSuppliers(
    $filter: ModelSubscriptionSuppliersFilterInput
  ) {
    onUpdateSuppliers(filter: $filter) {
      id
      description
      SuppliersClasses {
        items {
          id
          description
          suppliersID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSuppliers = /* GraphQL */ `
  subscription OnDeleteSuppliers(
    $filter: ModelSubscriptionSuppliersFilterInput
  ) {
    onDeleteSuppliers(filter: $filter) {
      id
      description
      SuppliersClasses {
        items {
          id
          description
          suppliersID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCars = /* GraphQL */ `
  subscription OnCreateCars($filter: ModelSubscriptionCarsFilterInput) {
    onCreateCars(filter: $filter) {
      id
      Make
      Model
      Variant
      Year
      Transmission
      Fuel
      Seats
      CarsKMPackages {
        items {
          id
          description
          carsID
          createdAt
          updatedAt
        }
        nextToken
      }
      CarsInsurancePackages {
        items {
          id
          description
          carsID
          createdAt
          updatedAt
        }
        nextToken
      }
      CarsClasses {
        id
        description
        suppliersID
        createdAt
        updatedAt
      }
      CarsPrices {
        items {
          id
          rate_1
          rate_3
          rate_6
          rate_12
          rate_18
          rate_24
          carsID
          createdAt
          updatedAt
        }
        nextToken
      }
      CarsFees {
        items {
          id
          deposit
          carsID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      carsCarsClassesId
    }
  }
`;
export const onUpdateCars = /* GraphQL */ `
  subscription OnUpdateCars($filter: ModelSubscriptionCarsFilterInput) {
    onUpdateCars(filter: $filter) {
      id
      Make
      Model
      Variant
      Year
      Transmission
      Fuel
      Seats
      CarsKMPackages {
        items {
          id
          description
          carsID
          createdAt
          updatedAt
        }
        nextToken
      }
      CarsInsurancePackages {
        items {
          id
          description
          carsID
          createdAt
          updatedAt
        }
        nextToken
      }
      CarsClasses {
        id
        description
        suppliersID
        createdAt
        updatedAt
      }
      CarsPrices {
        items {
          id
          rate_1
          rate_3
          rate_6
          rate_12
          rate_18
          rate_24
          carsID
          createdAt
          updatedAt
        }
        nextToken
      }
      CarsFees {
        items {
          id
          deposit
          carsID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      carsCarsClassesId
    }
  }
`;
export const onDeleteCars = /* GraphQL */ `
  subscription OnDeleteCars($filter: ModelSubscriptionCarsFilterInput) {
    onDeleteCars(filter: $filter) {
      id
      Make
      Model
      Variant
      Year
      Transmission
      Fuel
      Seats
      CarsKMPackages {
        items {
          id
          description
          carsID
          createdAt
          updatedAt
        }
        nextToken
      }
      CarsInsurancePackages {
        items {
          id
          description
          carsID
          createdAt
          updatedAt
        }
        nextToken
      }
      CarsClasses {
        id
        description
        suppliersID
        createdAt
        updatedAt
      }
      CarsPrices {
        items {
          id
          rate_1
          rate_3
          rate_6
          rate_12
          rate_18
          rate_24
          carsID
          createdAt
          updatedAt
        }
        nextToken
      }
      CarsFees {
        items {
          id
          deposit
          carsID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      carsCarsClassesId
    }
  }
`;
export const onCreateDocuments = /* GraphQL */ `
  subscription OnCreateDocuments(
    $filter: ModelSubscriptionDocumentsFilterInput
  ) {
    onCreateDocuments(filter: $filter) {
      id
      file_name
      document_type
      customersID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDocuments = /* GraphQL */ `
  subscription OnUpdateDocuments(
    $filter: ModelSubscriptionDocumentsFilterInput
  ) {
    onUpdateDocuments(filter: $filter) {
      id
      file_name
      document_type
      customersID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDocuments = /* GraphQL */ `
  subscription OnDeleteDocuments(
    $filter: ModelSubscriptionDocumentsFilterInput
  ) {
    onDeleteDocuments(filter: $filter) {
      id
      file_name
      document_type
      customersID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAddresses = /* GraphQL */ `
  subscription OnCreateAddresses(
    $filter: ModelSubscriptionAddressesFilterInput
  ) {
    onCreateAddresses(filter: $filter) {
      id
      street1
      street2
      city
      suburb
      province
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAddresses = /* GraphQL */ `
  subscription OnUpdateAddresses(
    $filter: ModelSubscriptionAddressesFilterInput
  ) {
    onUpdateAddresses(filter: $filter) {
      id
      street1
      street2
      city
      suburb
      province
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAddresses = /* GraphQL */ `
  subscription OnDeleteAddresses(
    $filter: ModelSubscriptionAddressesFilterInput
  ) {
    onDeleteAddresses(filter: $filter) {
      id
      street1
      street2
      city
      suburb
      province
      createdAt
      updatedAt
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
      CustomersDocuments {
        items {
          id
          file_name
          document_type
          customersID
          createdAt
          updatedAt
        }
        nextToken
      }
      CustomersAddresses {
        id
        street1
        street2
        city
        suburb
        province
        createdAt
        updatedAt
      }
      salary
      status
      comments
      CustomerReservations {
        items {
          id
          customersID
          pickup_date
          return_date
          pickup_location
          status
          car
          price
          deposit
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      customersCustomersAddressesId
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
      CustomersDocuments {
        items {
          id
          file_name
          document_type
          customersID
          createdAt
          updatedAt
        }
        nextToken
      }
      CustomersAddresses {
        id
        street1
        street2
        city
        suburb
        province
        createdAt
        updatedAt
      }
      salary
      status
      comments
      CustomerReservations {
        items {
          id
          customersID
          pickup_date
          return_date
          pickup_location
          status
          car
          price
          deposit
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      customersCustomersAddressesId
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
      CustomersDocuments {
        items {
          id
          file_name
          document_type
          customersID
          createdAt
          updatedAt
        }
        nextToken
      }
      CustomersAddresses {
        id
        street1
        street2
        city
        suburb
        province
        createdAt
        updatedAt
      }
      salary
      status
      comments
      CustomerReservations {
        items {
          id
          customersID
          pickup_date
          return_date
          pickup_location
          status
          car
          price
          deposit
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      customersCustomersAddressesId
    }
  }
`;
