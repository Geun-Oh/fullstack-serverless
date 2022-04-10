/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStage = /* GraphQL */ `
  mutation CreateStage(
    $input: CreateStageInput!
    $condition: ModelStageConditionInput
  ) {
    createStage(input: $input, condition: $condition) {
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
export const updateStage = /* GraphQL */ `
  mutation UpdateStage(
    $input: UpdateStageInput!
    $condition: ModelStageConditionInput
  ) {
    updateStage(input: $input, condition: $condition) {
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
export const deleteStage = /* GraphQL */ `
  mutation DeleteStage(
    $input: DeleteStageInput!
    $condition: ModelStageConditionInput
  ) {
    deleteStage(input: $input, condition: $condition) {
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
export const createPerformance = /* GraphQL */ `
  mutation CreatePerformance(
    $input: CreatePerformanceInput!
    $condition: ModelPerformanceConditionInput
  ) {
    createPerformance(input: $input, condition: $condition) {
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
export const updatePerformance = /* GraphQL */ `
  mutation UpdatePerformance(
    $input: UpdatePerformanceInput!
    $condition: ModelPerformanceConditionInput
  ) {
    updatePerformance(input: $input, condition: $condition) {
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
export const deletePerformance = /* GraphQL */ `
  mutation DeletePerformance(
    $input: DeletePerformanceInput!
    $condition: ModelPerformanceConditionInput
  ) {
    deletePerformance(input: $input, condition: $condition) {
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
