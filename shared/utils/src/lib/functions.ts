import AsyncStorage from "@react-native-async-storage/async-storage";
import { Cookies } from "react-cookie";

export function counter(val: number, val2: number) {
  console.log('counter', val + val2);
  return val + val2;
}

export function isAuth(token:string) {
  if (token) {
    console.log('isAuth', token);
    return token;
  } else {
    console.log('isAuth', false);
    return false;
  }
}

export const fetchDataw = async () => {
  try {
    const cookies = new Cookies();
    const value = await AsyncStorage.getItem('token');
    console.log('token value: w', value,cookies.get("token"));
  } catch (e) {
    console.log('token error:', e);
  }
};
