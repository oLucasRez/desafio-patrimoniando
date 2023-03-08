import { Dispatch } from 'react';
import { AssetModel } from 'src/domain/models';

export interface SearchInputProps {
  assets: AssetModel[];
  setAssets: Dispatch<React.SetStateAction<AssetModel[]>>;
}
