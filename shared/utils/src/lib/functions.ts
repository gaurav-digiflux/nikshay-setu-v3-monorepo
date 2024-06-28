import { Dimensions } from "react-native";

export function counter(val: number, val2: number) {
  return val + val2;
}

export function isAuth(token: string) {
  if (token) {
    return token;
  } else {
    return false;
  }
}

export const fetchDataw = async () => {
  console.log('fetchDaSSStaw');
};



const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) => size + (horizontalScale(size) - size) * factor;
// https://medium.com/simform-engineering/create-responsive-design-in-react-native-f84522a44365
export { horizontalScale, moderateScale, verticalScale };

