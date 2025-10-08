import NetInfo from "@react-native-community/netinfo";
import { format, formatISO, parseISO } from "date-fns";
import { es } from 'date-fns/locale/es';

export const getFormattedDate = (date: Date, dateFormat = 'LL') => {
  const dataISO = formatISO(date, { representation: 'date' });
  return format(parseISO(dataISO), dateFormat, { locale: es });
};

export async function isConnected(): Promise<boolean> {
  const state = await NetInfo.fetch();
  return !!state.isConnected && !!state.isInternetReachable;
}
