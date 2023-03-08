import { AssetModel } from 'src/domain/models';

export interface GetAssetsUsecase {
  execute(): Promise<AssetModel[]>;
}
