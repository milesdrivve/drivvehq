// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Cars, Reservations, Customers } = initSchema(schema);

export {
  Cars,
  Reservations,
  Customers
};