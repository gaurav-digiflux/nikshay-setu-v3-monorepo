import networkClient from './networkClient';

export async function getUserApi() {
  return networkClient.get(
    // `${BASE_URL}${urls.GET_USER}`,
    'https://mocki.io/v1/d41ce65a-0876-4d14-a8e5-90bd151bac7d',
    (status, response) => {
      console.log('SIHI', response);
      return response;
    }
  );
}
