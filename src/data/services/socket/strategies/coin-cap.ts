import { SocketService } from 'src/domain/services/socket';

export class CoinCapSocketService implements SocketService {
  baseURL: string;

  constructor() {
    this.baseURL = 'wss://ws.coincap.io';
  }

  onMessage<DataType>(url: string, callback: (data: DataType) => any): void {
    const websocket = new WebSocket(this.baseURL + url);

    websocket.onmessage = (event: MessageEvent<DataType>) => {
      callback(event.data);
    };
  }
}
