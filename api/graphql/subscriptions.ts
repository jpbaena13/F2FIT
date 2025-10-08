/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUserDayInfo = /* GraphQL */ `subscription OnCreateUserDayInfo(
  $filter: ModelSubscriptionUserDayInfoFilterInput
) {
  onCreateUserDayInfo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserDayInfoSubscriptionVariables,
  APITypes.OnCreateUserDayInfoSubscription
>;
export const onUpdateUserDayInfo = /* GraphQL */ `subscription OnUpdateUserDayInfo(
  $filter: ModelSubscriptionUserDayInfoFilterInput
) {
  onUpdateUserDayInfo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserDayInfoSubscriptionVariables,
  APITypes.OnUpdateUserDayInfoSubscription
>;
export const onDeleteUserDayInfo = /* GraphQL */ `subscription OnDeleteUserDayInfo(
  $filter: ModelSubscriptionUserDayInfoFilterInput
) {
  onDeleteUserDayInfo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserDayInfoSubscriptionVariables,
  APITypes.OnDeleteUserDayInfoSubscription
>;
