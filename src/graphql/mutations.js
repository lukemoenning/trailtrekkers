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
      following {
        id
        username
        email
        hikes {
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
        following {
          id
          username
          email
          createdAt
          updatedAt
        }
        followers {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      followers {
        id
        username
        email
        hikes {
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
        following {
          id
          username
          email
          createdAt
          updatedAt
        }
        followers {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      following {
        id
        username
        email
        hikes {
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
        following {
          id
          username
          email
          createdAt
          updatedAt
        }
        followers {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      followers {
        id
        username
        email
        hikes {
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
        following {
          id
          username
          email
          createdAt
          updatedAt
        }
        followers {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      following {
        id
        username
        email
        hikes {
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
        following {
          id
          username
          email
          createdAt
          updatedAt
        }
        followers {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      followers {
        id
        username
        email
        hikes {
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
        following {
          id
          username
          email
          createdAt
          updatedAt
        }
        followers {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
export const updateHike = /* GraphQL */ `
  mutation UpdateHike(
    $input: UpdateHikeInput!
    $condition: ModelHikeConditionInput
  ) {
    updateHike(input: $input, condition: $condition) {
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
export const deleteHike = /* GraphQL */ `
  mutation DeleteHike(
    $input: DeleteHikeInput!
    $condition: ModelHikeConditionInput
  ) {
    deleteHike(input: $input, condition: $condition) {
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
export const createHikeAndAssociateWithUser = /* GraphQL */ `
  mutation CreateHikeAndAssociateWithUser($input: CreateHikeInput!, $userId: String!, $hikeId: String!) {
    createHike(input: $input) {
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
    updateUser(input: {
      id: $userId,
      hikes: {
        connect: {
          id: $hikeId
        }
      }
    }
    ) {
      id
      username
      email
      hikes {
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
      createdAt
      updatedAt
    }
  }
`;
