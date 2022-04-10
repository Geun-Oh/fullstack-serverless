/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStage = /* GraphQL */ `
  subscription OnCreateStage {
    onCreateStage {
      id
      name
      performances {
        items {
          id
          performanceStageId
          productID
          performer
          imageUrl
          description
          time
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStage = /* GraphQL */ `
  subscription OnUpdateStage {
    onUpdateStage {
      id
      name
      performances {
        items {
          id
          performanceStageId
          productID
          performer
          imageUrl
          description
          time
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStage = /* GraphQL */ `
  subscription OnDeleteStage {
    onDeleteStage {
      id
      name
      performances {
        items {
          id
          performanceStageId
          productID
          performer
          imageUrl
          description
          time
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePerformance = /* GraphQL */ `
  subscription OnCreatePerformance {
    onCreatePerformance {
      id
      performanceStageId
      productID
      performer
      imageUrl
      description
      time
      stage {
        id
        name
        performances {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePerformance = /* GraphQL */ `
  subscription OnUpdatePerformance {
    onUpdatePerformance {
      id
      performanceStageId
      productID
      performer
      imageUrl
      description
      time
      stage {
        id
        name
        performances {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePerformance = /* GraphQL */ `
  subscription OnDeletePerformance {
    onDeletePerformance {
      id
      performanceStageId
      productID
      performer
      imageUrl
      description
      time
      stage {
        id
        name
        performances {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
