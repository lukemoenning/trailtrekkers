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
          createdAt
          updatedAt
          userHikesId
        }
        nextToken
      }
      posts {
        items {
          id
          title
          description
          imagePath
          likes
          createdAt
          updatedAt
          userPostsId
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
          createdAt
          updatedAt
          userHikesId
        }
        nextToken
      }
      posts {
        items {
          id
          title
          description
          imagePath
          likes
          createdAt
          updatedAt
          userPostsId
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
          createdAt
          updatedAt
          userHikesId
        }
        nextToken
      }
      posts {
        items {
          id
          title
          description
          imagePath
          likes
          createdAt
          updatedAt
          userPostsId
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
      title
      distance
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
      title
      distance
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
      title
      distance
      createdAt
      updatedAt
      userHikesId
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      user {
        id
        username
        email
        hikes {
          nextToken
        }
        posts {
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
      description
      imagePath
      likes
      createdAt
      updatedAt
      userPostsId
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      user {
        id
        username
        email
        hikes {
          nextToken
        }
        posts {
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
      description
      imagePath
      likes
      createdAt
      updatedAt
      userPostsId
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      user {
        id
        username
        email
        hikes {
          nextToken
        }
        posts {
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
      description
      imagePath
      likes
      createdAt
      updatedAt
      userPostsId
    }
  }
`;
