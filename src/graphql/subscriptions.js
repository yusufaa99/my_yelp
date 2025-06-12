/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      username
      email
      name
      phoneNumber
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      username
      email
      name
      phoneNumber
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      username
      email
      name
      phoneNumber
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateFavorite = /* GraphQL */ `
  subscription OnCreateFavorite($filter: ModelSubscriptionFavoriteFilterInput) {
    onCreateFavorite(filter: $filter) {
      id
      businessID
      userID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateFavorite = /* GraphQL */ `
  subscription OnUpdateFavorite($filter: ModelSubscriptionFavoriteFilterInput) {
    onUpdateFavorite(filter: $filter) {
      id
      businessID
      userID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteFavorite = /* GraphQL */ `
  subscription OnDeleteFavorite($filter: ModelSubscriptionFavoriteFilterInput) {
    onDeleteFavorite(filter: $filter) {
      id
      businessID
      userID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateReservation = /* GraphQL */ `
  subscription OnCreateReservation(
    $filter: ModelSubscriptionReservationFilterInput
  ) {
    onCreateReservation(filter: $filter) {
      id
      businessID
      userID
      dateTime
      status
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateReservation = /* GraphQL */ `
  subscription OnUpdateReservation(
    $filter: ModelSubscriptionReservationFilterInput
  ) {
    onUpdateReservation(filter: $filter) {
      id
      businessID
      userID
      dateTime
      status
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteReservation = /* GraphQL */ `
  subscription OnDeleteReservation(
    $filter: ModelSubscriptionReservationFilterInput
  ) {
    onDeleteReservation(filter: $filter) {
      id
      businessID
      userID
      dateTime
      status
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
    onCreateBusiness(filter: $filter) {
      id
      name
      category
      address
      location
      phoneNumber
      website
      rating
      region
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateBusiness = /* GraphQL */ `
  subscription OnUpdateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
    onUpdateBusiness(filter: $filter) {
      id
      name
      category
      address
      location
      phoneNumber
      website
      rating
      region
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteBusiness = /* GraphQL */ `
  subscription OnDeleteBusiness($filter: ModelSubscriptionBusinessFilterInput) {
    onDeleteBusiness(filter: $filter) {
      id
      name
      category
      address
      location
      phoneNumber
      website
      rating
      region
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview($filter: ModelSubscriptionReviewFilterInput) {
    onCreateReview(filter: $filter) {
      id
      content
      rating
      businessID
      userID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview($filter: ModelSubscriptionReviewFilterInput) {
    onUpdateReview(filter: $filter) {
      id
      content
      rating
      businessID
      userID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview($filter: ModelSubscriptionReviewFilterInput) {
    onDeleteReview(filter: $filter) {
      id
      content
      rating
      businessID
      userID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
