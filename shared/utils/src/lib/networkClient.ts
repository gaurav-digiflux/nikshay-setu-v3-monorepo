import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { Cookies } from 'react-cookie';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface NetworkClientOptions {
  headers?: { [key: string]: string };
  onUploadProgress?: (progressEvent: ProgressEvent) => void;
}

class NetworkClient {
  private service: AxiosInstance;

  constructor() {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    const service = axios.create({
      headers,
    });

    service.interceptors.response.use(this.handleSuccess, this.handleError);
    service.interceptors.request.use(this.handleRequest);

    this.service = service;
  }

  private async handleRequest(config: any) {
    const mobileToken = await AsyncStorage.getItem('token');
    let token: string | null = mobileToken;
    const cookies = new Cookies();
    if (!token) {
      try {
        token = cookies.get('token') || mobileToken || null;
      } catch (error) {
        token = null;
      }
    } else {
      token = null;
    }

    config.headers = {
      ...config.headers,
      // ...(token && { Authorization: `Bearer ${token}` }),
    };
    return config;
  }

  private handleSuccess(response: AxiosResponse) {
    return response;
  }

  private handleError(error: AxiosError) {
    return Promise.reject(error);
  }

  public get(
    path: string,
    callback: (status: number, data: any) => void,
    options?: NetworkClientOptions
  ) {
    return this.service
      .get(path, { headers: options?.headers })
      .then((response) => callback(response.status, response.data));
  }

  public patch(
    path: string,
    payload: any,
    callback: (status: number, data: any) => void,
    options?: NetworkClientOptions
  ) {
    return this.service
      .patch(path, payload, { headers: options?.headers })
      .then((response) => callback(response.status, response.data));
  }

  public post(
    path: string,
    payload: any,
    callback: (status: number, data: any) => void,
    options?: NetworkClientOptions
  ) {
    return this.service
      .post(path, payload, {
        headers: options?.headers,
        //   onUploadProgress: options?.onUploadProgress,
      })
      .then((response) => callback(response.status, response.data));
  }

  public put(
    path: string,
    payload: any,
    callback: (status: number, data: any) => void,
    options?: NetworkClientOptions
  ) {
    return this.service
      .put(path, payload, { headers: options?.headers })
      .then((response) => callback(response.status, response.data));
  }

  public delete(
    path: string,
    payload: any,
    callback: (status: number, data: any) => void,
    options?: NetworkClientOptions
  ) {
    return this.service
      .delete(path, {
        data: payload,
        headers: options?.headers,
      })
      .then((response) => callback(response.status, response.data));
  }

  public postAsFormData(
    path: string,
    payload: FormData,
    callback: (status: number, data: any) => void,
    options?: NetworkClientOptions
  ) {
    return this.service
      .post(path, payload, { headers: options?.headers })
      .then((response) => callback(response.status, response.data));
  }
}

export default new NetworkClient();
