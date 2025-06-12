/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getFavorite = /* GraphQL */ `
  query GetFavorite($id: ID!) {
    getFavorite(id: $id) {
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
export const listFavorites = /* GraphQL */ `
  query ListFavorites(
    $filter: ModelFavoriteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavorites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        businessID
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReservation = /* GraphQL */ `
  query GetReservation($id: ID!) {
    getReservation(id: $id) {
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
export const listReservations = /* GraphQL */ `
  query ListReservations(
    $filter: ModelReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const favoritesByBusinessIDAndCreatedAt = /* GraphQL */ `
  query FavoritesByBusinessIDAndCreatedAt(
    $businessID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFavoriteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    favoritesByBusinessIDAndCreatedAt(
      businessID: $businessID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        businessID
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const favoritesByUserIDAndCreatedAt = /* GraphQL */ `
  query FavoritesByUserIDAndCreatedAt(
    $userID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFavoriteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    favoritesByUserIDAndCreatedAt(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        businessID
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reservationsByBusinessIDAndCreatedAt = /* GraphQL */ `
  query ReservationsByBusinessIDAndCreatedAt(
    $businessID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reservationsByBusinessIDAndCreatedAt(
      businessID: $businessID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const reservationsByUserIDAndCreatedAt = /* GraphQL */ `
  query ReservationsByUserIDAndCreatedAt(
    $userID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reservationsByUserIDAndCreatedAt(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getBusiness = /* GraphQL */ `
  query GetBusiness($id: ID!) {
    getBusiness(id: $id) {
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
export const listBusinesses = /* GraphQL */ `
  query ListBusinesses(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
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
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const reviewsByBusinessIDAndCreatedAt = /* GraphQL */ `
  query ReviewsByBusinessIDAndCreatedAt(
    $businessID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewsByBusinessIDAndCreatedAt(
      businessID: $businessID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const reviewsByUserIDAndCreatedAt = /* GraphQL */ `
  query ReviewsByUserIDAndCreatedAt(
    $userID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewsByUserIDAndCreatedAt(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
