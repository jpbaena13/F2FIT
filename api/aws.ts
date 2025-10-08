import { Amplify } from "aws-amplify";
import { generateClient, GraphQLResult } from "aws-amplify/api";

import awsExports from "@/app/aws-exports";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";

import { UserDayInfo } from "./models";

Amplify.configure(awsExports);
const AWS_API = generateClient();

const api = {
  dayInfo: {
    all: async () => {
      const response = await AWS_API.graphql({
        query: queries.listUserDayInfos
      }) as GraphQLResult<any>;

      return response.data.listUserDayInfos.items.map((item: UserDayInfo) => (
        { ...item, habits: JSON.parse(item.habits as string) }
      ));
    },

    /**
     * Create a new dayInfo
     * @param {UserDayInfo} dayInfo
     */
    create: async (dayInfo: UserDayInfo) => {
      const response = await AWS_API.graphql({
        query: mutations.createUserDayInfo,
        variables: { input: { ...dayInfo, habits: JSON.stringify(dayInfo.habits) } }
      }) as GraphQLResult<any>;

      const item = response.data.createUserDayInfo;
      return { ...item, habits: JSON.parse(item.habits) } ;
    },

    /**
     * Return the give UserdayInfo according to the given id
     * @param {string} id
     */
    read: async (id: string) => {
      const response = await AWS_API.graphql({
        query: queries.getUserDayInfo,
        variables: { id }
      }) as GraphQLResult<any>;

      const dayInfo = response.data.getUserDayInfo;
      return { ...dayInfo, info: JSON.parse(dayInfo.info)};
    },

    /**
     * Update the given dayInfo according to dayInfo.id
     * @param {UserDayInfo} dayInfo
     */
    update: async (dayInfo: UserDayInfo) => {
      if (!dayInfo.id) return;

      const response = await AWS_API.graphql({
        query: mutations.updateUserDayInfo,
        variables: { input: {
          id: dayInfo.id as string,
          ...dayInfo,
          habits: JSON.stringify(dayInfo.habits)
        }}
      }) as GraphQLResult<any>;

      const item = response.data.updateUserDayInfo;
      return { ...item, habits: JSON.parse(item.habits) } ;
    },

    filterByDate: async (date: string) => {
      const response = await AWS_API.graphql({
        query: queries.userDayInfosByDate,
        variables: { date}
      }) as GraphQLResult<any>;

      const item = response.data.userDayInfosByDate.items[0];
      return item ? { ...item, habits: JSON.parse(item.habits) } : null;
    },
  }
};

export default api;
