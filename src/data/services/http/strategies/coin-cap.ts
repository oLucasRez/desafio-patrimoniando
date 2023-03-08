import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { HTTPService, Response } from 'src/domain/services/http';

export class CoinCapHTTPService implements HTTPService {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: `https://api.coincap.io/v2`,
    });
  }

  async get<DataType>(url: string): Promise<Response<DataType>> {
    let response: AxiosResponse<DataType, any> | undefined = undefined;

    try {
      response = await this.instance.get<DataType>(url);

      return {
        ok: true,
        data: response.data,
      };
    } catch (e) {
      const error = e as AxiosError;

      return {
        ok: false,
        error: {
          code: error.status ?? 0,
          message: error.message,
        },
      };
    }
  }
}
