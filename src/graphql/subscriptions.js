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
export const onCreateHike = /* GraphQL */ `
  subscription OnCreateHike($filter: ModelSubscriptionHikeFilterInput) {
    onCreateHike(filter: $filter) {
      id
      title
      distance
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
      title
      distance
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
      title
      distance
      createdAt
      updatedAt
      userHikesId
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
