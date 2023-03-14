/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteCandidate = /* GraphQL */ `
  mutation DeleteCandidate(
    $input: DeleteCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    deleteCandidate(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const createCandidate = /* GraphQL */ `
  mutation CreateCandidate(
    $input: CreateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    createCandidate(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateCandidate = /* GraphQL */ `
  mutation UpdateCandidate(
    $input: UpdateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    updateCandidate(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const createToDo = /* GraphQL */ `
  mutation CreateToDo(
    $input: CreateToDoInput!
    $condition: ModelToDoConditionInput
  ) {
    createToDo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateToDo = /* GraphQL */ `
  mutation UpdateToDo(
    $input: UpdateToDoInput!
    $condition: ModelToDoConditionInput
  ) {
    updateToDo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteToDo = /* GraphQL */ `
  mutation DeleteToDo(
    $input: DeleteToDoInput!
    $condition: ModelToDoConditionInput
  ) {
    deleteToDo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createFees = /* GraphQL */ `
  mutation CreateFees(
    $input: CreateFeesInput!
    $condition: ModelFeesConditionInput
  ) {
    createFees(input: $input, condition: $condition) {
      id
      deposit
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const updateFees = /* GraphQL */ `
  mutation UpdateFees(
    $input: UpdateFeesInput!
    $condition: ModelFeesConditionInput
  ) {
    updateFees(input: $input, condition: $condition) {
      id
      deposit
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const deleteFees = /* GraphQL */ `
  mutation DeleteFees(
    $input: DeleteFeesInput!
    $condition: ModelFeesConditionInput
  ) {
    deleteFees(input: $input, condition: $condition) {
      id
      deposit
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const createPrices = /* GraphQL */ `
  mutation CreatePrices(
    $input: CreatePricesInput!
    $condition: ModelPricesConditionInput
  ) {
    createPrices(input: $input, condition: $condition) {
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
export const updatePrices = /* GraphQL */ `
  mutation UpdatePrices(
    $input: UpdatePricesInput!
    $condition: ModelPricesConditionInput
  ) {
    updatePrices(input: $input, condition: $condition) {
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
export const deletePrices = /* GraphQL */ `
  mutation DeletePrices(
    $input: DeletePricesInput!
    $condition: ModelPricesConditionInput
  ) {
    deletePrices(input: $input, condition: $condition) {
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
export const createInsurancePackages = /* GraphQL */ `
  mutation CreateInsurancePackages(
    $input: CreateInsurancePackagesInput!
    $condition: ModelInsurancePackagesConditionInput
  ) {
    createInsurancePackages(input: $input, condition: $condition) {
      id
      description
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const updateInsurancePackages = /* GraphQL */ `
  mutation UpdateInsurancePackages(
    $input: UpdateInsurancePackagesInput!
    $condition: ModelInsurancePackagesConditionInput
  ) {
    updateInsurancePackages(input: $input, condition: $condition) {
      id
      description
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const deleteInsurancePackages = /* GraphQL */ `
  mutation DeleteInsurancePackages(
    $input: DeleteInsurancePackagesInput!
    $condition: ModelInsurancePackagesConditionInput
  ) {
    deleteInsurancePackages(input: $input, condition: $condition) {
      id
      description
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const createKMPackages = /* GraphQL */ `
  mutation CreateKMPackages(
    $input: CreateKMPackagesInput!
    $condition: ModelKMPackagesConditionInput
  ) {
    createKMPackages(input: $input, condition: $condition) {
      id
      description
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const updateKMPackages = /* GraphQL */ `
  mutation UpdateKMPackages(
    $input: UpdateKMPackagesInput!
    $condition: ModelKMPackagesConditionInput
  ) {
    updateKMPackages(input: $input, condition: $condition) {
      id
      description
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const deleteKMPackages = /* GraphQL */ `
  mutation DeleteKMPackages(
    $input: DeleteKMPackagesInput!
    $condition: ModelKMPackagesConditionInput
  ) {
    deleteKMPackages(input: $input, condition: $condition) {
      id
      description
      carsID
      createdAt
      updatedAt
    }
  }
`;
export const createClasses = /* GraphQL */ `
  mutation CreateClasses(
    $input: CreateClassesInput!
    $condition: ModelClassesConditionInput
  ) {
    createClasses(input: $input, condition: $condition) {
      id
      description
      suppliersID
      createdAt
      updatedAt
    }
  }
`;
export const updateClasses = /* GraphQL */ `
  mutation UpdateClasses(
    $input: UpdateClassesInput!
    $condition: ModelClassesConditionInput
  ) {
    updateClasses(input: $input, condition: $condition) {
      id
      description
      suppliersID
      createdAt
      updatedAt
    }
  }
`;
export const deleteClasses = /* GraphQL */ `
  mutation DeleteClasses(
    $input: DeleteClassesInput!
    $condition: ModelClassesConditionInput
  ) {
    deleteClasses(input: $input, condition: $condition) {
      id
      description
      suppliersID
      createdAt
      updatedAt
    }
  }
`;
export const createSuppliers = /* GraphQL */ `
  mutation CreateSuppliers(
    $input: CreateSuppliersInput!
    $condition: ModelSuppliersConditionInput
  ) {
    createSuppliers(input: $input, condition: $condition) {
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
export const updateSuppliers = /* GraphQL */ `
  mutation UpdateSuppliers(
    $input: UpdateSuppliersInput!
    $condition: ModelSuppliersConditionInput
  ) {
    updateSuppliers(input: $input, condition: $condition) {
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
export const deleteSuppliers = /* GraphQL */ `
  mutation DeleteSuppliers(
    $input: DeleteSuppliersInput!
    $condition: ModelSuppliersConditionInput
  ) {
    deleteSuppliers(input: $input, condition: $condition) {
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
export const createCars = /* GraphQL */ `
  mutation CreateCars(
    $input: CreateCarsInput!
    $condition: ModelCarsConditionInput
  ) {
    createCars(input: $input, condition: $condition) {
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
export const updateCars = /* GraphQL */ `
  mutation UpdateCars(
    $input: UpdateCarsInput!
    $condition: ModelCarsConditionInput
  ) {
    updateCars(input: $input, condition: $condition) {
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
export const deleteCars = /* GraphQL */ `
  mutation DeleteCars(
    $input: DeleteCarsInput!
    $condition: ModelCarsConditionInput
  ) {
    deleteCars(input: $input, condition: $condition) {
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
export const createDocuments = /* GraphQL */ `
  mutation CreateDocuments(
    $input: CreateDocumentsInput!
    $condition: ModelDocumentsConditionInput
  ) {
    createDocuments(input: $input, condition: $condition) {
      id
      file_name
      document_type
      customersID
      createdAt
      updatedAt
    }
  }
`;
export const updateDocuments = /* GraphQL */ `
  mutation UpdateDocuments(
    $input: UpdateDocumentsInput!
    $condition: ModelDocumentsConditionInput
  ) {
    updateDocuments(input: $input, condition: $condition) {
      id
      file_name
      document_type
      customersID
      createdAt
      updatedAt
    }
  }
`;
export const deleteDocuments = /* GraphQL */ `
  mutation DeleteDocuments(
    $input: DeleteDocumentsInput!
    $condition: ModelDocumentsConditionInput
  ) {
    deleteDocuments(input: $input, condition: $condition) {
      id
      file_name
      document_type
      customersID
      createdAt
      updatedAt
    }
  }
`;
export const createAddresses = /* GraphQL */ `
  mutation CreateAddresses(
    $input: CreateAddressesInput!
    $condition: ModelAddressesConditionInput
  ) {
    createAddresses(input: $input, condition: $condition) {
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
export const updateAddresses = /* GraphQL */ `
  mutation UpdateAddresses(
    $input: UpdateAddressesInput!
    $condition: ModelAddressesConditionInput
  ) {
    updateAddresses(input: $input, condition: $condition) {
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
export const deleteAddresses = /* GraphQL */ `
  mutation DeleteAddresses(
    $input: DeleteAddressesInput!
    $condition: ModelAddressesConditionInput
  ) {
    deleteAddresses(input: $input, condition: $condition) {
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
