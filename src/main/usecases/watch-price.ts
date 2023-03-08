import { WatchPriceUsecase } from 'src/domain/usecases';
import { CoinCapSocketService } from 'src/data/services/socket/strategies';
import { SocketWatchPrice } from 'src/data/usecases';

export function makeWatchPrice(): WatchPriceUsecase {
  const socketService = new CoinCapSocketService();
  const watchPrice = new SocketWatchPrice(socketService);

  return watchPrice;
}
