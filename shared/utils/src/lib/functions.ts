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
