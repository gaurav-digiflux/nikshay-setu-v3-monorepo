import networkClient from "./networkClient";
import { BASE_URL, urls } from "@nikshay-setu-v3-monorepo/constants";

export async function getUserApi() {
    return networkClient.get(
        `${BASE_URL}${urls.GET_USER}`,
        // 'https://dummyjson.com/users',
        (status, response) => {
            console.log('SIHI',response);
            return response;
        },
    );
}