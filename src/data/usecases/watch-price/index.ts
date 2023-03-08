import { SocketService } from 'src/domain/services/socket';
import { WatchPriceUsecase } from 'src/domain/usecases';

type PriceData = string;

export class SocketWatchPrice implements WatchPriceUsecase {
  constructor(private readonly socketService: SocketService) {}

  async execute(
    assetID: string,
    callback: (price: string) => any
  ): Promise<void> {
    try {
      this.socketService.onMessage<PriceData>(
        `/prices?assets=${assetID}`,
        (message) => {
          const data = JSON.parse(message);

          if (data[assetID]) callback(data[assetID]);
        }
      );
    } catch (e) {}
  }
}
