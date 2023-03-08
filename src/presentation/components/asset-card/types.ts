import { AssetModel } from 'src/domain/models';

export interface AssetCardProps {
  asset: AssetModel;
}

export interface ContainerProps {
  trade?: 1 | -1;
}

export interface PriceProps {
  trade?: 1 | -1;
}
