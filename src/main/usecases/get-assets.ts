import { GetAssetsUsecase } from 'src/domain/usecases';
import { CoinCapHTTPService } from 'src/data/services/http/strategies';
import { HTTPGetAssets } from 'src/data/usecases';

export function makeGetAssets(): GetAssetsUsecase {
  const httpService = new CoinCapHTTPService();
  const getAssets = new HTTPGetAssets(httpService);

  return getAssets;
}
