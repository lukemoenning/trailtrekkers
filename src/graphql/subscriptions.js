/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateHike = /* GraphQL */ `
  subscription OnCreateHike($filter: ModelSubscriptionHikeFilterInput) {
    onCreateHike(filter: $filter) {
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
export const onUpdateHike = /* GraphQL */ `
  subscription OnUpdateHike($filter: ModelSubscriptionHikeFilterInput) {
    onUpdateHike(filter: $filter) {
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
export const onDeleteHike = /* GraphQL */ `
  subscription OnDeleteHike($filter: ModelSubscriptionHikeFilterInput) {
    onDeleteHike(filter: $filter) {
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
