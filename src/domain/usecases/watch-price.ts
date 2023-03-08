export interface WatchPriceUsecase {
  execute(assetID: string, callback: (price: string) => any): Promise<void>;
}
