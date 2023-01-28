/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateHike = /* GraphQL */ `
  subscription OnCreateHike($filter: ModelSubscriptionHikeFilterInput) {
    onCreateHike(filter: $filter) {
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
export const onUpdateHike = /* GraphQL */ `
  subscription OnUpdateHike($filter: ModelSubscriptionHikeFilterInput) {
    onUpdateHike(filter: $filter) {
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
export const onDeleteHike = /* GraphQL */ `
  subscription OnDeleteHike($filter: ModelSubscriptionHikeFilterInput) {
    onDeleteHike(filter: $filter) {
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
