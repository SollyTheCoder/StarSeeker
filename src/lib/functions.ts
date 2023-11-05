import axios, {AxiosError} from 'axios';
import {API_KEY} from '@env';

export const axiosRequest = async (
  url: string,
  method: 'GET' | 'POST',
  data: any = {},
): Promise<{data: any; status: number}> => {
  try {
    const response = await axios({
      url: url,
      method: method,
      data: data,
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
