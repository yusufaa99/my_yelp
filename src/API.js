/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  reviews?: ModelReviewConnection | null,
  favorites?: ModelFavoriteConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelReviewConnection = {
  __typename: "ModelReviewConnection",
  items:  Array<Review | null >,
  nextToken?: string | null,
};

export type Review = {
  __typename: "Review",
  id: string,
  content: string,
  rating: number,
  businessID: string,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt: string,
  userReviewsId?: string | null,
  businessReviewsId?: string | null,
};

export type ModelFavoriteConnection = {
  __typename: "ModelFavoriteConnection",
  items:  Array<Favorite | null >,
  nextToken?: string | null,
};

export type Favorite = {
  __typename: "Favorite",
  id: string,
  businessID: string,
  userID: string,
  createdAt?: string | null,
  updatedAt: string,
  userFavoritesId?: string | null,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateBusinessInput = {
  id?: string | null,
  name: string,
  category: string,
  address: string,
  latitude?: number | null,
  longitude?: number | null,
  rating?: number | null,
  images?: Array< string | null > | null,
  createdAt?: string | null,
};

export type ModelBusinessConditionInput = {
  name?: ModelStringInput | null,
  category?: ModelStringInput | null,
  address?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  rating?: ModelFloatInput | null,
  images?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelBusinessConditionInput | null > | null,
  or?: Array< ModelBusinessConditionInput | null > | null,
  not?: ModelBusinessConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Business = {
  __typename: "Business",
  id: string,
  name: string,
  category: string,
  address: string,
  latitude?: number | null,
  longitude?: number | null,
  rating?: number | null,
  images?: Array< string | null > | null,
  reviews?: ModelReviewConnection | null,
  createdAt?: string | null,
  updatedAt: string,
};

export type UpdateBusinessInput = {
  id: string,
  name?: string | null,
  category?: string | null,
  address?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  rating?: number | null,
  images?: Array< string | null > | null,
  createdAt?: string | null,
};

export type DeleteBusinessInput = {
  id: string,
};

export type CreateReviewInput = {
  id?: string | null,
  content: string,
  rating: number,
  businessID: string,
  owner?: string | null,
  createdAt?: string | null,
  userReviewsId?: string | null,
  businessReviewsId?: string | null,
};

export type ModelReviewConditionInput = {
  content?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  businessID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelReviewConditionInput | null > | null,
  or?: Array< ModelReviewConditionInput | null > | null,
  not?: ModelReviewConditionInput | null,
  updatedAt?: ModelStringInput | null,
  userReviewsId?: ModelIDInput | null,
  businessReviewsId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateReviewInput = {
  id: string,
  content?: string | null,
  rating?: number | null,
  businessID?: string | null,
  owner?: string | null,
  createdAt?: string | null,
  userReviewsId?: string | null,
  businessReviewsId?: string | null,
};

export type DeleteReviewInput = {
  id: string,
};

export type CreateFavoriteInput = {
  id?: string | null,
  businessID: string,
  userID: string,
  createdAt?: string | null,
  userFavoritesId?: string | null,
};

export type ModelFavoriteConditionInput = {
  businessID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelFavoriteConditionInput | null > | null,
  or?: Array< ModelFavoriteConditionInput | null > | null,
  not?: ModelFavoriteConditionInput | null,
  updatedAt?: ModelStringInput | null,
  userFavoritesId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateFavoriteInput = {
  id: string,
  businessID?: string | null,
  userID?: string | null,
  createdAt?: string | null,
  userFavoritesId?: string | null,
};

export type DeleteFavoriteInput = {
  id: string,
};

export type ModelBusinessFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  category?: ModelStringInput | null,
  address?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  rating?: ModelFloatInput | null,
  images?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBusinessFilterInput | null > | null,
  or?: Array< ModelBusinessFilterInput | null > | null,
  not?: ModelBusinessFilterInput | null,
};

export type ModelBusinessConnection = {
  __typename: "ModelBusinessConnection",
  items:  Array<Business | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelReviewFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  businessID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReviewFilterInput | null > | null,
  or?: Array< ModelReviewFilterInput | null > | null,
  not?: ModelReviewFilterInput | null,
  userReviewsId?: ModelIDInput | null,
  businessReviewsId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelFavoriteFilterInput = {
  id?: ModelIDInput | null,
  businessID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFavoriteFilterInput | null > | null,
  or?: Array< ModelFavoriteFilterInput | null > | null,
  not?: ModelFavoriteFilterInput | null,
  userFavoritesId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionBusinessFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  latitude?: ModelSubscriptionFloatInput | null,
  longitude?: ModelSubscriptionFloatInput | null,
  rating?: ModelSubscriptionFloatInput | null,
  images?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBusinessFilterInput | null > | null,
  or?: Array< ModelSubscriptionBusinessFilterInput | null > | null,
  businessReviewsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  userReviewsId?: ModelSubscriptionIDInput | null,
  userFavoritesId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionReviewFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionIntInput | null,
  businessID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReviewFilterInput | null > | null,
  or?: Array< ModelSubscriptionReviewFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFavoriteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  businessID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFavoriteFilterInput | null > | null,
  or?: Array< ModelSubscriptionFavoriteFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        content: string,
        rating: number,
        businessID: string,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
        userReviewsId?: string | null,
        businessReviewsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      items:  Array< {
        __typename: "Favorite",
        id: string,
        businessID: string,
        userID: string,
        createdAt?: string | null,
        updatedAt: string,
        userFavoritesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        content: string,
        rating: number,
        businessID: string,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
        userReviewsId?: string | null,
        businessReviewsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      items:  Array< {
        __typename: "Favorite",
        id: string,
        businessID: string,
        userID: string,
        createdAt?: string | null,
        updatedAt: string,
        userFavoritesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        content: string,
        rating: number,
        businessID: string,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
        userReviewsId?: string | null,
        businessReviewsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      items:  Array< {
        __typename: "Favorite",
        id: string,
        businessID: string,
        userID: string,
        createdAt?: string | null,
        updatedAt: string,
        userFavoritesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateBusinessMutationVariables = {
  input: CreateBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type CreateBusinessMutation = {
  createBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    category: string,
    address: string,
    latitude?: number | null,
    longitude?: number | null,
    rating?: number | null,
    images?: Array< string | null > | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        content: string,
        rating: number,
        businessID: string,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
        userReviewsId?: string | null,
        businessReviewsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateBusinessMutationVariables = {
  input: UpdateBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type UpdateBusinessMutation = {
  updateBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    category: string,
    address: string,
    latitude?: number | null,
    longitude?: number | null,
    rating?: number | null,
    images?: Array< string | null > | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        content: string,
        rating: number,
        businessID: string,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
        userReviewsId?: string | null,
        businessReviewsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteBusinessMutationVariables = {
  input: DeleteBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type DeleteBusinessMutation = {
  deleteBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    category: string,
    address: string,
    latitude?: number | null,
    longitude?: number | null,
    rating?: number | null,
    images?: Array< string | null > | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        content: string,
        rating: number,
        businessID: string,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
        userReviewsId?: string | null,
        businessReviewsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type CreateReviewMutation = {
  createReview?:  {
    __typename: "Review",
    id: string,
    content: string,
    rating: number,
    businessID: string,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
    userReviewsId?: string | null,
    businessReviewsId?: string | null,
  } | null,
};

export type UpdateReviewMutationVariables = {
  input: UpdateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type UpdateReviewMutation = {
  updateReview?:  {
    __typename: "Review",
    id: string,
    content: string,
    rating: number,
    businessID: string,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
    userReviewsId?: string | null,
    businessReviewsId?: string | null,
  } | null,
};

export type DeleteReviewMutationVariables = {
  input: DeleteReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type DeleteReviewMutation = {
  deleteReview?:  {
    __typename: "Review",
    id: string,
    content: string,
    rating: number,
    businessID: string,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
    userReviewsId?: string | null,
    businessReviewsId?: string | null,
  } | null,
};

export type CreateFavoriteMutationVariables = {
  input: CreateFavoriteInput,
  condition?: ModelFavoriteConditionInput | null,
};

export type CreateFavoriteMutation = {
  createFavorite?:  {
    __typename: "Favorite",
    id: string,
    businessID: string,
    userID: string,
    createdAt?: string | null,
    updatedAt: string,
    userFavoritesId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateFavoriteMutationVariables = {
  input: UpdateFavoriteInput,
  condition?: ModelFavoriteConditionInput | null,
};

export type UpdateFavoriteMutation = {
  updateFavorite?:  {
    __typename: "Favorite",
    id: string,
    businessID: string,
    userID: string,
    createdAt?: string | null,
    updatedAt: string,
    userFavoritesId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteFavoriteMutationVariables = {
  input: DeleteFavoriteInput,
  condition?: ModelFavoriteConditionInput | null,
};

export type DeleteFavoriteMutation = {
  deleteFavorite?:  {
    __typename: "Favorite",
    id: string,
    businessID: string,
    userID: string,
    createdAt?: string | null,
    updatedAt: string,
    userFavoritesId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetBusinessQueryVariables = {
  id: string,
};

export type GetBusinessQuery = {
  getBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    category: string,
    address: string,
    latitude?: number | null,
    longitude?: number | null,
    rating?: number | null,
    images?: Array< string | null > | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        content: string,
        rating: number,
        businessID: string,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
        userReviewsId?: string | null,
        businessReviewsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListBusinessesQueryVariables = {
  filter?: ModelBusinessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBusinessesQuery = {
  listBusinesses?:  {
    __typename: "ModelBusinessConnection",
    items:  Array< {
      __typename: "Business",
      id: string,
      name: string,
      category: string,
      address: string,
      latitude?: number | null,
      longitude?: number | null,
      rating?: number | null,
      images?: Array< string | null > | null,
      reviews?:  {
        __typename: "ModelReviewConnection",
        items:  Array< {
          __typename: "Review",
          id: string,
          content: string,
          rating: number,
          businessID: string,
          owner?: string | null,
          createdAt?: string | null,
          updatedAt: string,
          userReviewsId?: string | null,
          businessReviewsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        content: string,
        rating: number,
        businessID: string,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
        userReviewsId?: string | null,
        businessReviewsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      items:  Array< {
        __typename: "Favorite",
        id: string,
        businessID: string,
        userID: string,
        createdAt?: string | null,
        updatedAt: string,
        userFavoritesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      reviews?:  {
        __typename: "ModelReviewConnection",
        items:  Array< {
          __typename: "Review",
          id: string,
          content: string,
          rating: number,
          businessID: string,
          owner?: string | null,
          createdAt?: string | null,
          updatedAt: string,
          userReviewsId?: string | null,
          businessReviewsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        items:  Array< {
          __typename: "Favorite",
          id: string,
          businessID: string,
          userID: string,
          createdAt?: string | null,
          updatedAt: string,
          userFavoritesId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReviewQueryVariables = {
  id: string,
};

export type GetReviewQuery = {
  getReview?:  {
    __typename: "Review",
    id: string,
    content: string,
    rating: number,
    businessID: string,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
    userReviewsId?: string | null,
    businessReviewsId?: string | null,
  } | null,
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReviewsQuery = {
  listReviews?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      content: string,
      rating: number,
      businessID: string,
      owner?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      userReviewsId?: string | null,
      businessReviewsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ReviewsByBusinessIDQueryVariables = {
  businessID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReviewsByBusinessIDQuery = {
  reviewsByBusinessID?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      content: string,
      rating: number,
      businessID: string,
      owner?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      userReviewsId?: string | null,
      businessReviewsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFavoriteQueryVariables = {
  id: string,
};

export type GetFavoriteQuery = {
  getFavorite?:  {
    __typename: "Favorite",
    id: string,
    businessID: string,
    userID: string,
    createdAt?: string | null,
    updatedAt: string,
    userFavoritesId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListFavoritesQueryVariables = {
  filter?: ModelFavoriteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFavoritesQuery = {
  listFavorites?:  {
    __typename: "ModelFavoriteConnection",
    items:  Array< {
      __typename: "Favorite",
      id: string,
      businessID: string,
      userID: string,
      createdAt?: string | null,
      updatedAt: string,
      userFavoritesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FavoritesByBusinessIDQueryVariables = {
  businessID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFavoriteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FavoritesByBusinessIDQuery = {
  favoritesByBusinessID?:  {
    __typename: "ModelFavoriteConnection",
    items:  Array< {
      __typename: "Favorite",
      id: string,
      businessID: string,
      userID: string,
      createdAt?: string | null,
      updatedAt: string,
      userFavoritesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBusinessSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessFilterInput | null,
};

export type OnCreateBusinessSubscription = {
  onCreateBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    category: string,
    address: string,
    latitude?: number | null,
    longitude?: number | null,
    rating?: number | null,
    images?: Array< string | null > | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        content: string,
        rating: number,
        businessID: string,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
        userReviewsId?: string | null,
        businessReviewsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateBusinessSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessFilterInput | null,
};

export type OnUpdateBusinessSubscription = {
  onUpdateBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    category: string,
    address: string,
    latitude?: number | null,
    longitude?: number | null,
    rating?: number | null,
    images?: Array< string | null > | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        content: string,
        rating: number,
        businessID: string,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
        userReviewsId?: string | null,
        businessReviewsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteBusinessSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessFilterInput | null,
};

export type OnDeleteBusinessSubscription = {
  onDeleteBusiness?:  {
    __typename: "Business",
    id: string,
    name: string,
    category: string,
    address: string,
    latitude?: number | null,
    longitude?: number | null,
    rating?: number | null,
    images?: Array< string | null > | null,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        content: string,
        rating: number,
        businessID: string,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
        userReviewsId?: string | null,
        businessReviewsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        content: string,
        rating: number,
        businessID: string,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
        userReviewsId?: string | null,
        businessReviewsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      items:  Array< {
        __typename: "Favorite",
        id: string,
        businessID: string,
        userID: string,
        createdAt?: string | null,
        updatedAt: string,
        userFavoritesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        content: string,
        rating: number,
        businessID: string,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
        userReviewsId?: string | null,
        businessReviewsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      items:  Array< {
        __typename: "Favorite",
        id: string,
        businessID: string,
        userID: string,
        createdAt?: string | null,
        updatedAt: string,
        userFavoritesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    reviews?:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        content: string,
        rating: number,
        businessID: string,
        owner?: string | null,
        createdAt?: string | null,
        updatedAt: string,
        userReviewsId?: string | null,
        businessReviewsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      items:  Array< {
        __typename: "Favorite",
        id: string,
        businessID: string,
        userID: string,
        createdAt?: string | null,
        updatedAt: string,
        userFavoritesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
  owner?: string | null,
};

export type OnCreateReviewSubscription = {
  onCreateReview?:  {
    __typename: "Review",
    id: string,
    content: string,
    rating: number,
    businessID: string,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
    userReviewsId?: string | null,
    businessReviewsId?: string | null,
  } | null,
};

export type OnUpdateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
  owner?: string | null,
};

export type OnUpdateReviewSubscription = {
  onUpdateReview?:  {
    __typename: "Review",
    id: string,
    content: string,
    rating: number,
    businessID: string,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
    userReviewsId?: string | null,
    businessReviewsId?: string | null,
  } | null,
};

export type OnDeleteReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
  owner?: string | null,
};

export type OnDeleteReviewSubscription = {
  onDeleteReview?:  {
    __typename: "Review",
    id: string,
    content: string,
    rating: number,
    businessID: string,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt: string,
    userReviewsId?: string | null,
    businessReviewsId?: string | null,
  } | null,
};

export type OnCreateFavoriteSubscriptionVariables = {
  filter?: ModelSubscriptionFavoriteFilterInput | null,
  owner?: string | null,
};

export type OnCreateFavoriteSubscription = {
  onCreateFavorite?:  {
    __typename: "Favorite",
    id: string,
    businessID: string,
    userID: string,
    createdAt?: string | null,
    updatedAt: string,
    userFavoritesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateFavoriteSubscriptionVariables = {
  filter?: ModelSubscriptionFavoriteFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFavoriteSubscription = {
  onUpdateFavorite?:  {
    __typename: "Favorite",
    id: string,
    businessID: string,
    userID: string,
    createdAt?: string | null,
    updatedAt: string,
    userFavoritesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteFavoriteSubscriptionVariables = {
  filter?: ModelSubscriptionFavoriteFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFavoriteSubscription = {
  onDeleteFavorite?:  {
    __typename: "Favorite",
    id: string,
    businessID: string,
    userID: string,
    createdAt?: string | null,
    updatedAt: string,
    userFavoritesId?: string | null,
    owner?: string | null,
  } | null,
};
