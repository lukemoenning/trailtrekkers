/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      hikes
      following
      followers
      createdAt
      updatedAt
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
        hikes
        following
        followers
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHike = /* GraphQL */ `
  query GetHike($id: ID!) {
    getHike(id: $id) {
      id
      userId
      title
      distance
      description
      imagePath
      likes
      createdAt
      updatedAt
    }
  }
`;
export const listHikes = /* GraphQL */ `
  query ListHikes(
    $filter: ModelHikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        title
        distance
        description
        imagePath
        likes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
