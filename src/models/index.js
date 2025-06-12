// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Business, Review, Favorite, Reservation } = initSchema(schema);

export {
  User,
  Business,
  Review,
  Favorite,
  Reservation
};