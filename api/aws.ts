import AsyncStorage from "@react-native-async-storage/async-storage";
import { Amplify } from "aws-amplify";
import { generateClient, GraphQLResult } from "aws-amplify/api";

import awsExports from "@/app/aws-exports";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";

import { isConnected } from "@/constants/functions";
import { UserDayInfo } from "./models";

Amplify.configure(awsExports);
const AWS_API = generateClient();

const LOCAL_KEY = "offline_pending_records";

const api = {
  dayInfo: {
    all: async () => {
      if (await isConnected()) {
        const response = await AWS_API.graphql({
          query: queries.listUserDayInfos
        }) as GraphQLResult<any>;
  
        return response.data.listUserDayInfos.items.map((item: UserDayInfo) => (
          { ...item, habits: JSON.parse(item.habits as string) }
        ));
      } else {
        throw new Error('No conected');
      }
    },

    /**
     * Create a new dayInfo
     * @param {UserDayInfo} dayInfo
     */
    create: async (dayInfo: UserDayInfo) => {
      if (await isConnected()) {
        const response = await AWS_API.graphql({
          query: mutations.createUserDayInfo,
          variables: { input: { ...dayInfo, habits: JSON.stringify(dayInfo.habits) } }
        }) as GraphQLResult<any>;
  
        const item = response.data.createUserDayInfo;
        return { ...item, habits: JSON.parse(item.habits) } ;
      } else {
        const data = await AsyncStorage.getItem(LOCAL_KEY);
        const records = data ? JSON.parse(data) : {};
        records[dayInfo.date] = { ...dayInfo, id: Math.floor(Math.random() * 1000)};
        await AsyncStorage.setItem(LOCAL_KEY, JSON.stringify(records));

        return records[dayInfo.date];
      }
    },

    /**
     * Return the give UserdayInfo according to the given id
     * @param {string} id
     */
    read: async (id: string) => {
      if (await isConnected()) {
        const response = await AWS_API.graphql({
          query: queries.getUserDayInfo,
          variables: { id }
        }) as GraphQLResult<any>;
  
        const dayInfo = response.data.getUserDayInfo;
        return { ...dayInfo, info: JSON.parse(dayInfo.info)};
      } else {
        throw new Error('No conected');
      }
    },

    /**
     * Update the given dayInfo according to dayInfo.id
     * @param {UserDayInfo} dayInfo
     */
    update: async (dayInfo: UserDayInfo) => {
      if (!dayInfo.id) return;

      if (await isConnected()) {
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
      } else {
        const data = await AsyncStorage.getItem(LOCAL_KEY);
        const records = data ? JSON.parse(data) : {};
        records[dayInfo.date] = dayInfo;

        await AsyncStorage.setItem(LOCAL_KEY, JSON.stringify(records));
      }
    },

    filterByDate: async (date: string) => {
      if (await isConnected()) {
        // First, sync local data and remove it
        const data = await AsyncStorage.getItem(LOCAL_KEY);
        const records = data ? JSON.parse(data) : {};
        for (const key in records) {
          const dayInfo = records[key];
          await AWS_API.graphql({
            query: mutations.createUserDayInfo,
            variables: { input: {
              ...dayInfo,
              id: undefined, // removing id to regenerate it in the cloud
              habits: JSON.stringify(dayInfo.habits)
            }}
          }) as GraphQLResult<any>;
        }
        await AsyncStorage.removeItem(LOCAL_KEY);

        const response = await AWS_API.graphql({
          query: queries.userDayInfosByDate,
          variables: { date}
        }) as GraphQLResult<any>;
  
        const item = response.data.userDayInfosByDate.items[0];
        return item ? { ...item, habits: JSON.parse(item.habits) } : null;
      } else {
        const data = await AsyncStorage.getItem(LOCAL_KEY);
        const records = data ? JSON.parse(data) : {};
        return records[date];
      }
    },
  }
};

export default api;
