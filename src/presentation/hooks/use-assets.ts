import { useState } from 'react';
import { useEffect } from 'react';
import { AssetModel } from 'src/domain/models';
import { makeGetAssets, makeWatchPrice } from 'src/main/usecases';

const getAssets = makeGetAssets();
const watchPrice = makeWatchPrice();

export function useAssets() {
  const [assets, setAssets] = useState<AssetModel[]>([]);

  useEffect(() => {
    (async () => {
      const _assets = await getAssets.execute();

      setAssets(_assets);

      _assets.forEach(({ id }) => {
        watchPrice.execute(id, (price) => {
          setAssets((prevAssets) => {
            const [...newAssets] = prevAssets;

            const i = newAssets.findIndex((asset) => asset.id === id);

            if (newAssets[i]) {
              const prevPrice = Number(prevAssets[i].price);
              const newPrice = Number(price);

              newAssets[i].price = price;

              if (prevPrice < newPrice) newAssets[i].trade = 1;
              if (prevPrice > newPrice) newAssets[i].trade = -1;
            }

            return newAssets;
          });
        });
      });
    })();
  }, []);

  return {
    assets,
  };
}
