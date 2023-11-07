import axios, {AxiosError} from 'axios';
import {API_KEY} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SavedRoute} from 'starseeker-types/types';

export const axiosRequest = async (
  url: string,
  method: 'GET' | 'POST',
): Promise<{data: any; status: number}> => {
  try {
    const response = await axios({
      url: url,
      method: method,
      headers: {
        'x-api-key': API_KEY,
      },
    });
    return {data: response.data, status: response.status};
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      return {
        data: axiosError.response?.data ?? 'Unknown error',
        status: axiosError.response?.status ?? 500,
      };
    } else {
      return {data: 'Unknown error', status: 500};
    }
  }
};

export const storeRouteData = async (value: SavedRoute[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('routeData', jsonValue);
    return true;
  } catch (e) {
    return false;
  }
};

export const getRouteData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('routeData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return null;
  }
};
