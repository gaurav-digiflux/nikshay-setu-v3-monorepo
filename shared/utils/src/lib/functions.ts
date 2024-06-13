import AsyncStorage from "@react-native-async-storage/async-storage";
import { Cookies } from "react-cookie";

export function counter(val: number, val2: number) {
  return val + val2;
}

export function isAuth(token:string) {
  if (token) {
    return token;
  } else {
    return false;
  }
}

export const fetchDataw = async () => {
  try {
    const cookies = new Cookies();
    const value = await AsyncStorage.getItem('token');
  } catch (e) {
    console.log('token error:', e);
  }
};
