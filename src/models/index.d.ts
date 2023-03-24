import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





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
  readonly pickup_date?: string | null;
  readonly return_date?: string | null;
  readonly pickup_location?: string | null;
  readonly status?: string | null;
  readonly car?: string | null;
  readonly price?: number | null;
  readonly deposit?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReservations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reservations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pickup_date?: string | null;
  readonly return_date?: string | null;
  readonly pickup_location?: string | null;
  readonly status?: string | null;
  readonly car?: string | null;
  readonly price?: number | null;
  readonly deposit?: number | null;
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
  readonly drivers_licence?: string | null;
  readonly salary?: string | null;
  readonly status?: string | null;
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
  readonly drivers_licence?: string | null;
  readonly salary?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Customers = LazyLoading extends LazyLoadingDisabled ? EagerCustomers : LazyCustomers

export declare const Customers: (new (init: ModelInit<Customers>) => Customers) & {
  copyOf(source: Customers, mutator: (draft: MutableModel<Customers>) => MutableModel<Customers> | void): Customers;
}