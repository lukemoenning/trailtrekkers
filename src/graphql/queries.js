/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      hikes {
        items {
          id
          title
          distance
          description
          imagePath
          likes
          createdAt
          updatedAt
          userHikesId
        }
        nextToken
      }
      following {
        items {
          id
          username
          email
          createdAt
          updatedAt
          userFollowingId
          userFollowersId
        }
        nextToken
      }
      followers {
        items {
          id
          username
          email
          createdAt
          updatedAt
          userFollowingId
          userFollowersId
        }
        nextToken
      }
      createdAt
      updatedAt
      userFollowingId
      userFollowersId
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
        hikes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
          nextToken
        }
        createdAt
        updatedAt
        userFollowingId
        userFollowersId
      }
      nextToken
    }
  }
`;
export const getHike = /* GraphQL */ `
  query GetHike($id: ID!) {
    getHike(id: $id) {
      id
      user {
        id
        username
        email
        hikes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
          nextToken
        }
        createdAt
        updatedAt
        userFollowingId
        userFollowersId
      }
      title
      distance
      description
      imagePath
      likes
      createdAt
      updatedAt
      userHikesId
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
        user {
          id
          username
          email
          createdAt
          updatedAt
          userFollowingId
          userFollowersId
        }
        title
        distance
        description
        imagePath
        likes
        createdAt
        updatedAt
        userHikesId
      }
      nextToken
    }
  }
`;
