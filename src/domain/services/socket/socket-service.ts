export interface SocketService {
  onMessage<DataType>(url: string, callback: (data: DataType) => any): void;
}
