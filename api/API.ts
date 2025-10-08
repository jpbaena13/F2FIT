/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserDayInfoInput = {
  id?: string | null,
  date: string,
  energyLevel?: number | null,
  emotionalState?: number | null,
  notes?: string | null,
  habits?: string | null,
};

export type ModelUserDayInfoConditionInput = {
  date?: ModelStringInput | null,
  energyLevel?: ModelIntInput | null,
  emotionalState?: ModelIntInput | null,
  notes?: ModelStringInput | null,
  habits?: ModelStringInput | null,
  and?: Array< ModelUserDayInfoConditionInput | null > | null,
  or?: Array< ModelUserDayInfoConditionInput | null > | null,
  not?: ModelUserDayInfoConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UserDayInfo = {
  __typename: "UserDayInfo",
  id: string,
  date: string,
  energyLevel?: number | null,
  emotionalState?: number | null,
  notes?: string | null,
  habits?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserDayInfoInput = {
  id: string,
  date?: string | null,
  energyLevel?: number | null,
  emotionalState?: number | null,
  notes?: string | null,
  habits?: string | null,
};

export type DeleteUserDayInfoInput = {
  id: string,
};

export type ModelUserDayInfoFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  energyLevel?: ModelIntInput | null,
  emotionalState?: ModelIntInput | null,
  notes?: ModelStringInput | null,
  habits?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserDayInfoFilterInput | null > | null,
  or?: Array< ModelUserDayInfoFilterInput | null > | null,
  not?: ModelUserDayInfoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserDayInfoConnection = {
  __typename: "ModelUserDayInfoConnection",
  items:  Array<UserDayInfo | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserDayInfoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  energyLevel?: ModelSubscriptionIntInput | null,
  emotionalState?: ModelSubscriptionIntInput | null,
  notes?: ModelSubscriptionStringInput | null,
  habits?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserDayInfoFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserDayInfoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateUserDayInfoMutationVariables = {
  input: CreateUserDayInfoInput,
  condition?: ModelUserDayInfoConditionInput | null,
};

export type CreateUserDayInfoMutation = {
  createUserDayInfo?:  {
    __typename: "UserDayInfo",
    id: string,
    date: string,
    energyLevel?: number | null,
    emotionalState?: number | null,
    notes?: string | null,
    habits?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserDayInfoMutationVariables = {
  input: UpdateUserDayInfoInput,
  condition?: ModelUserDayInfoConditionInput | null,
};

export type UpdateUserDayInfoMutation = {
  updateUserDayInfo?:  {
    __typename: "UserDayInfo",
    id: string,
    date: string,
    energyLevel?: number | null,
    emotionalState?: number | null,
    notes?: string | null,
    habits?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserDayInfoMutationVariables = {
  input: DeleteUserDayInfoInput,
  condition?: ModelUserDayInfoConditionInput | null,
};

export type DeleteUserDayInfoMutation = {
  deleteUserDayInfo?:  {
    __typename: "UserDayInfo",
    id: string,
    date: string,
    energyLevel?: number | null,
    emotionalState?: number | null,
    notes?: string | null,
    habits?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserDayInfoQueryVariables = {
  id: string,
};

export type GetUserDayInfoQuery = {
  getUserDayInfo?:  {
    __typename: "UserDayInfo",
    id: string,
    date: string,
    energyLevel?: number | null,
    emotionalState?: number | null,
    notes?: string | null,
    habits?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserDayInfosQueryVariables = {
  filter?: ModelUserDayInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserDayInfosQuery = {
  listUserDayInfos?:  {
    __typename: "ModelUserDayInfoConnection",
    items:  Array< {
      __typename: "UserDayInfo",
      id: string,
      date: string,
      energyLevel?: number | null,
      emotionalState?: number | null,
      notes?: string | null,
      habits?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserDayInfosByDateQueryVariables = {
  date: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserDayInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserDayInfosByDateQuery = {
  userDayInfosByDate?:  {
    __typename: "ModelUserDayInfoConnection",
    items:  Array< {
      __typename: "UserDayInfo",
      id: string,
      date: string,
      energyLevel?: number | null,
      emotionalState?: number | null,
      notes?: string | null,
      habits?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserDayInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserDayInfoFilterInput | null,
};

export type OnCreateUserDayInfoSubscription = {
  onCreateUserDayInfo?:  {
    __typename: "UserDayInfo",
    id: string,
    date: string,
    energyLevel?: number | null,
    emotionalState?: number | null,
    notes?: string | null,
    habits?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserDayInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserDayInfoFilterInput | null,
};

export type OnUpdateUserDayInfoSubscription = {
  onUpdateUserDayInfo?:  {
    __typename: "UserDayInfo",
    id: string,
    date: string,
    energyLevel?: number | null,
    emotionalState?: number | null,
    notes?: string | null,
    habits?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserDayInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserDayInfoFilterInput | null,
};

export type OnDeleteUserDayInfoSubscription = {
  onDeleteUserDayInfo?:  {
    __typename: "UserDayInfo",
    id: string,
    date: string,
    energyLevel?: number | null,
    emotionalState?: number | null,
    notes?: string | null,
    habits?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
