export interface AssetModel {
  id: string;
  name: string;
  symbol: string;
  price: string;
  trade?: 1 | -1;
}
