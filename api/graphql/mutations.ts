/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUserDayInfo = /* GraphQL */ `mutation CreateUserDayInfo(
  $input: CreateUserDayInfoInput!
  $condition: ModelUserDayInfoConditionInput
) {
  createUserDayInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserDayInfoMutationVariables,
  APITypes.CreateUserDayInfoMutation
>;
export const updateUserDayInfo = /* GraphQL */ `mutation UpdateUserDayInfo(
  $input: UpdateUserDayInfoInput!
  $condition: ModelUserDayInfoConditionInput
) {
  updateUserDayInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserDayInfoMutationVariables,
  APITypes.UpdateUserDayInfoMutation
>;
export const deleteUserDayInfo = /* GraphQL */ `mutation DeleteUserDayInfo(
  $input: DeleteUserDayInfoInput!
  $condition: ModelUserDayInfoConditionInput
) {
  deleteUserDayInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserDayInfoMutationVariables,
  APITypes.DeleteUserDayInfoMutation
>;
