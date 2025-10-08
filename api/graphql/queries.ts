/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUserDayInfo = /* GraphQL */ `query GetUserDayInfo($id: ID!) {
  getUserDayInfo(id: $id) {
    id
    date
    energyLevel
    emotionalState
    notes
    habits
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserDayInfoQueryVariables,
  APITypes.GetUserDayInfoQuery
>;
export const listUserDayInfos = /* GraphQL */ `query ListUserDayInfos(
  $filter: ModelUserDayInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserDayInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      energyLevel
      emotionalState
      notes
      habits
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserDayInfosQueryVariables,
  APITypes.ListUserDayInfosQuery
>;
export const userDayInfosByDate = /* GraphQL */ `query UserDayInfosByDate(
  $date: AWSDate!
  $sortDirection: ModelSortDirection
  $filter: ModelUserDayInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  userDayInfosByDate(
    date: $date
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      date
      energyLevel
      emotionalState
      notes
      habits
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserDayInfosByDateQueryVariables,
  APITypes.UserDayInfosByDateQuery
>;
