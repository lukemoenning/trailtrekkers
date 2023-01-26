/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createHike = /* GraphQL */ `
  mutation CreateHike(
    $input: CreateHikeInput!
    $condition: ModelHikeConditionInput
  ) {
    createHike(input: $input, condition: $condition) {
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
export const updateHike = /* GraphQL */ `
  mutation UpdateHike(
    $input: UpdateHikeInput!
    $condition: ModelHikeConditionInput
  ) {
    updateHike(input: $input, condition: $condition) {
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
export const deleteHike = /* GraphQL */ `
  mutation DeleteHike(
    $input: DeleteHikeInput!
    $condition: ModelHikeConditionInput
  ) {
    deleteHike(input: $input, condition: $condition) {
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
