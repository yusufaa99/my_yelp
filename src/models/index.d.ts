import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly reviews?: (Review | null)[] | null;
  readonly favorites?: (Favorite | null)[] | null;
  readonly reservations?: (Reservation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly reviews: AsyncCollection<Review>;
  readonly favorites: AsyncCollection<Favorite>;
  readonly reservations: AsyncCollection<Reservation>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerBusiness = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Business, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly address: string;
  readonly latitude?: number | null;
  readonly longitude?: number | null;
  readonly phoneNumber?: string | null;
  readonly website?: string | null;
  readonly rating?: number | null;
  readonly images?: (string | null)[] | null;
  readonly reviews?: (Review | null)[] | null;
  readonly reservations?: (Reservation | null)[] | null;
  readonly claimedBy?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBusiness = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Business, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly address: string;
  readonly latitude?: number | null;
  readonly longitude?: number | null;
  readonly phoneNumber?: string | null;
  readonly website?: string | null;
  readonly rating?: number | null;
  readonly images?: (string | null)[] | null;
  readonly reviews: AsyncCollection<Review>;
  readonly reservations: AsyncCollection<Reservation>;
  readonly claimedBy?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Business = LazyLoading extends LazyLoadingDisabled ? EagerBusiness : LazyBusiness

export declare const Business: (new (init: ModelInit<Business>) => Business) & {
  copyOf(source: Business, mutator: (draft: MutableModel<Business>) => MutableModel<Business> | void): Business;
}

type EagerReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly rating: number;
  readonly businessID: string;
  readonly owner?: string | null;
  readonly helpfulVotes?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userReviewsId?: string | null;
  readonly businessReviewsId?: string | null;
}

type LazyReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly rating: number;
  readonly businessID: string;
  readonly owner?: string | null;
  readonly helpfulVotes?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userReviewsId?: string | null;
  readonly businessReviewsId?: string | null;
}

export declare type Review = LazyLoading extends LazyLoadingDisabled ? EagerReview : LazyReview

export declare const Review: (new (init: ModelInit<Review>) => Review) & {
  copyOf(source: Review, mutator: (draft: MutableModel<Review>) => MutableModel<Review> | void): Review;
}

type EagerFavorite = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Favorite, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly businessID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userFavoritesId?: string | null;
}

type LazyFavorite = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Favorite, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly businessID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userFavoritesId?: string | null;
}

export declare type Favorite = LazyLoading extends LazyLoadingDisabled ? EagerFavorite : LazyFavorite

export declare const Favorite: (new (init: ModelInit<Favorite>) => Favorite) & {
  copyOf(source: Favorite, mutator: (draft: MutableModel<Favorite>) => MutableModel<Favorite> | void): Favorite;
}

type EagerReservation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reservation, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly businessID: string;
  readonly userID: string;
  readonly dateTime: string;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userReservationsId?: string | null;
  readonly businessReservationsId?: string | null;
}

type LazyReservation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reservation, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly businessID: string;
  readonly userID: string;
  readonly dateTime: string;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userReservationsId?: string | null;
  readonly businessReservationsId?: string | null;
}

export declare type Reservation = LazyLoading extends LazyLoadingDisabled ? EagerReservation : LazyReservation

export declare const Reservation: (new (init: ModelInit<Reservation>) => Reservation) & {
  copyOf(source: Reservation, mutator: (draft: MutableModel<Reservation>) => MutableModel<Reservation> | void): Reservation;
}