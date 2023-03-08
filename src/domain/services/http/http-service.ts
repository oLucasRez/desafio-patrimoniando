import { Response } from './response';

export interface HTTPService {
  get<DataType>(url: string): Promise<Response<DataType>>;
}
