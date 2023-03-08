import { AssetModel } from 'src/domain/models';
import { HTTPService } from 'src/domain/services/http';
import { GetAssetsUsecase } from 'src/domain/usecases';

interface GetAssetsData {
  data: {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    supply: string;
    maxSupply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    changePercent24Hr: string;
    vwap24Hr: string;
    explorer: string;
  }[];
}

export class HTTPGetAssets implements GetAssetsUsecase {
  constructor(private readonly httpService: HTTPService) {}

  async execute(): Promise<AssetModel[]> {
    const response = await this.httpService.get<GetAssetsData>('/assets');

    if (response.ok) {
      const { data } = response.data;

      return data.map((asset) => ({
        id: asset.id,
        name: asset.name,
        symbol: asset.symbol,
        price: asset.priceUsd,
      }));
    }

    throw new Error('Falha na requisição.');
  }
}
