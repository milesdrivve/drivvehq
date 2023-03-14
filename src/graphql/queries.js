/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCandidate = /* GraphQL */ `
  query GetCandidate($id: ID!) {
    getCandidate(id: $id) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const listCandidates = /* GraphQL */ `
  query ListCandidates(
    $filter: ModelCandidateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCandidates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getToDo = /* GraphQL */ `
  query GetToDo($id: ID!) {
    getToDo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listToDos = /* GraphQL */ `
  query ListToDos(
    $filter: ModelToDoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listToDos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFees = /* GraphQL */ `
  query GetFees($id: ID!) {
    getFees(id: $id) {
      id
      deposit
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const listFees = /* GraphQL */ `
  query ListFees(
    $filter: ModelFeesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        deposit
        carsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const feesByCarsID = /* GraphQL */ `
  query FeesByCarsID(
    $carsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFeesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    feesByCarsID(
      carsID: $carsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        deposit
        carsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrices = /* GraphQL */ `
  query GetPrices($id: ID!) {
    getPrices(id: $id) {
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
export const listPrices = /* GraphQL */ `
  query ListPrices(
    $filter: ModelPricesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrices(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const pricesByCarsID = /* GraphQL */ `
  query PricesByCarsID(
    $carsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPricesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pricesByCarsID(
      carsID: $carsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getInsurancePackages = /* GraphQL */ `
  query GetInsurancePackages($id: ID!) {
    getInsurancePackages(id: $id) {
      id
      description
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const listInsurancePackages = /* GraphQL */ `
  query ListInsurancePackages(
    $filter: ModelInsurancePackagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInsurancePackages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        carsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const insurancePackagesByCarsID = /* GraphQL */ `
  query InsurancePackagesByCarsID(
    $carsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInsurancePackagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    insurancePackagesByCarsID(
      carsID: $carsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        carsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getKMPackages = /* GraphQL */ `
  query GetKMPackages($id: ID!) {
    getKMPackages(id: $id) {
      id
      description
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const listKMPackages = /* GraphQL */ `
  query ListKMPackages(
    $filter: ModelKMPackagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKMPackages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        carsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const kMPackagesByCarsID = /* GraphQL */ `
  query KMPackagesByCarsID(
    $carsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelKMPackagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    kMPackagesByCarsID(
      carsID: $carsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        carsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClasses = /* GraphQL */ `
  query GetClasses($id: ID!) {
    getClasses(id: $id) {
      id
      description
      suppliersID
      createdAt
      updatedAt
    }
  }
`;
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        suppliersID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const classesBySuppliersID = /* GraphQL */ `
  query ClassesBySuppliersID(
    $suppliersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClassesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    classesBySuppliersID(
      suppliersID: $suppliersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        suppliersID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSuppliers = /* GraphQL */ `
  query GetSuppliers($id: ID!) {
    getSuppliers(id: $id) {
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
export const listSuppliers = /* GraphQL */ `
  query ListSuppliers(
    $filter: ModelSuppliersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuppliers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        SuppliersClasses {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCars = /* GraphQL */ `
  query GetCars($id: ID!) {
    getCars(id: $id) {
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
export const listCars = /* GraphQL */ `
  query ListCars(
    $filter: ModelCarsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Make
        Model
        Variant
        Year
        Transmission
        Fuel
        Seats
        CarsKMPackages {
          nextToken
        }
        CarsInsurancePackages {
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
          nextToken
        }
        CarsFees {
          nextToken
        }
        createdAt
        updatedAt
        carsCarsClassesId
      }
      nextToken
    }
  }
`;
export const getDocuments = /* GraphQL */ `
  query GetDocuments($id: ID!) {
    getDocuments(id: $id) {
      id
      file_name
      document_type
      customersID
      createdAt
      updatedAt
    }
  }
`;
export const listDocuments = /* GraphQL */ `
  query ListDocuments(
    $filter: ModelDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const documentsByCustomersID = /* GraphQL */ `
  query DocumentsByCustomersID(
    $customersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    documentsByCustomersID(
      customersID: $customersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getAddresses = /* GraphQL */ `
  query GetAddresses($id: ID!) {
    getAddresses(id: $id) {
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
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        street1
        street2
        city
        suburb
        province
        createdAt
        updatedAt
      }
      nextToken
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
      createdAt
      updatedAt
      customersCustomersAddressesId
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
        CustomersDocuments {
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
        createdAt
        updatedAt
        customersCustomersAddressesId
      }
      nextToken
    }
  }
`;
