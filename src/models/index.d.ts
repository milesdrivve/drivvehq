import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerCars = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cars, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly make?: string | null;
  readonly model?: string | null;
  readonly variant?: string | null;
  readonly fuel?: string | null;
  readonly transmission?: string | null;
  readonly year?: string | null;
  readonly price?: string | null;
  readonly deposit?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCars = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cars, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly make?: string | null;
  readonly model?: string | null;
  readonly variant?: string | null;
  readonly fuel?: string | null;
  readonly transmission?: string | null;
  readonly year?: string | null;
  readonly price?: string | null;
  readonly deposit?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Cars = LazyLoading extends LazyLoadingDisabled ? EagerCars : LazyCars

export declare const Cars: (new (init: ModelInit<Cars>) => Cars) & {
  copyOf(source: Cars, mutator: (draft: MutableModel<Cars>) => MutableModel<Cars> | void): Cars;
}

type EagerReservations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reservations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly reservation_id?: string | null;
  readonly pickup_date?: string | null;
  readonly return_date?: string | null;
  readonly pickup_location?: string | null;
  readonly make?: string | null;
  readonly model?: string | null;
  readonly variant?: string | null;
  readonly price?: number | null;
  readonly deposit?: number | null;
  readonly status?: string | null;
  readonly customer_id?: string | null;
  readonly start_date?: string | null;
  readonly duration?: number | null;
  readonly end_date?: string | null;
  readonly class?: string | null;
  readonly test_1?: string | null;
  readonly test_2?: (string | null)[] | null;
  readonly customersID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReservations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reservations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly reservation_id?: string | null;
  readonly pickup_date?: string | null;
  readonly return_date?: string | null;
  readonly pickup_location?: string | null;
  readonly make?: string | null;
  readonly model?: string | null;
  readonly variant?: string | null;
  readonly price?: number | null;
  readonly deposit?: number | null;
  readonly status?: string | null;
  readonly customer_id?: string | null;
  readonly start_date?: string | null;
  readonly duration?: number | null;
  readonly end_date?: string | null;
  readonly class?: string | null;
  readonly test_1?: string | null;
  readonly test_2?: (string | null)[] | null;
  readonly customersID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Reservations = LazyLoading extends LazyLoadingDisabled ? EagerReservations : LazyReservations

export declare const Reservations: (new (init: ModelInit<Reservations>) => Reservations) & {
  copyOf(source: Reservations, mutator: (draft: MutableModel<Reservations>) => MutableModel<Reservations> | void): Reservations;
}

type EagerCustomers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly id_number?: string | null;
  readonly id_expiry?: string | null;
  readonly drivers_licence_expiry?: string | null;
  readonly status?: string | null;
  readonly date_reviewed?: string | null;
  readonly address_1?: string | null;
  readonly address_2?: string | null;
  readonly city?: string | null;
  readonly province?: string | null;
  readonly postal_code?: string | null;
  readonly salary_nett?: string | null;
  readonly drivers_licence?: string | null;
  readonly id_file?: string | null;
  readonly drivers_licence_file?: string | null;
  readonly poa_fi?: string | null;
  readonly bank_statement_1_file?: string | null;
  readonly bank_statement_2_file?: string | null;
  readonly bank_statement_3_file?: string | null;
  readonly salary_slip_1_file?: string | null;
  readonly salary_slip_2_file?: string | null;
  readonly salary_slip_3_file?: string | null;
  readonly CustomersReservations?: (Reservations | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly id_number?: string | null;
  readonly id_expiry?: string | null;
  readonly drivers_licence_expiry?: string | null;
  readonly status?: string | null;
  readonly date_reviewed?: string | null;
  readonly address_1?: string | null;
  readonly address_2?: string | null;
  readonly city?: string | null;
  readonly province?: string | null;
  readonly postal_code?: string | null;
  readonly salary_nett?: string | null;
  readonly drivers_licence?: string | null;
  readonly id_file?: string | null;
  readonly drivers_licence_file?: string | null;
  readonly poa_fi?: string | null;
  readonly bank_statement_1_file?: string | null;
  readonly bank_statement_2_file?: string | null;
  readonly bank_statement_3_file?: string | null;
  readonly salary_slip_1_file?: string | null;
  readonly salary_slip_2_file?: string | null;
  readonly salary_slip_3_file?: string | null;
  readonly CustomersReservations: AsyncCollection<Reservations>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Customers = LazyLoading extends LazyLoadingDisabled ? EagerCustomers : LazyCustomers

export declare const Customers: (new (init: ModelInit<Customers>) => Customers) & {
  copyOf(source: Customers, mutator: (draft: MutableModel<Customers>) => MutableModel<Customers> | void): Customers;
}